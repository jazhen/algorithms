const { expect } = require('chai');
const { createRequestQueue } = require('../requestQueue' );

describe('Request Queue / Read-Only Tests', function() {
  describe('enqueue', function() {
    let requestQueue;
    beforeEach(function () {
      requestQueue = createRequestQueue();
    });

    it('returns a promise that resolves with the value returned by the request', async function() {
      const promise = requestQueue.enqueue(0, async () => 'hello world');
      await requestQueue.processNext();
      expect(await promise).to.equal('hello world');
    });
  });

  describe('cancel', function() {
    let requestQueue;
    beforeEach(function () {
      requestQueue = createRequestQueue();
    });

    it('removes a request from the queue', async function() {
      let executed = false;
      const request = async () => {
        executed = true;
        return '42';
      };

      const promise = requestQueue.enqueue(42, request);
      requestQueue.cancel(42);
      await requestQueue.processNext();

      expect(executed).to.equal(false);

      return promise.catch(() => {
        // Avoid an unhandled promise rejection warning
      });
    });

    it('rejects the promise returned by enqueue', function() {
      const request = async () => {
        executed = true;
        return '42';
      };

      const promise = requestQueue.enqueue(42, request);
      requestQueue.cancel(42);

      return promise
        .then(() => {
          throw new Error('This "then" should not be reachable if your code works correctly');
        })
        .catch(error => {
          // If we made it to this catch block, it means your promise rejected as desired
          expect(true).to.be.true;
        });
    });

    it('does nothing if no matching request is found', async function() {
      requestQueue.enqueue(41, async () => '41');
      requestQueue.enqueue(42, async () => '42');
      expect(requestQueue.size()).to.equal(2);

      requestQueue.cancel(43);
      expect(requestQueue.size()).to.equal(2);
    });
  });

  describe('processNext', function() {
    let requestQueue;
    beforeEach(function () {
      requestQueue = createRequestQueue();
    });

    it('processes requests, in order', async function() {
      const executed = [false, false, false];
      const request0 = async () => {
        executed[0] = true;
        return '0';
      };

      const request1 = async () => {
        executed[1] = true;
        return '1';
      };

      const request2 = async () => {
        executed[2] = true;
        return '2';
      };

      requestQueue.enqueue(0, request0);
      requestQueue.enqueue(1, request1);
      requestQueue.enqueue(2, request2);

      expect(requestQueue.size()).to.equal(3);
      expect(executed).to.deep.equal([false, false, false]);

      await requestQueue.processNext();
      expect(requestQueue.size()).to.equal(2);
      expect(executed).to.deep.equal([true, false, false]);

      await requestQueue.processNext();
      expect(requestQueue.size()).to.equal(1);
      expect(executed).to.deep.equal([true, true, false]);

      await requestQueue.processNext();
      expect(requestQueue.size()).to.equal(0);
      expect(executed).to.deep.equal([true, true, true]);
    });

    it('does not reject if a request throws an error', async function() {
      const errorRequest = async () => {
        throw new Error('This request has an error in it');
      };

      const promise = requestQueue.enqueue(0, errorRequest);
      promise.catch(() => {
        // Avoid an unhandled promise rejection warning
      });

      await requestQueue.processNext();
    });
  });
});
