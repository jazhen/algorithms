// function createRequestQueue() {
//   /**
//    * Your mission:
//    * Create and return a request queue with the following methods.
//    * Carefully read the description of each method in the task description.
//    *
//    * enqueue(id: number, request: () => Promise<string>): Promise<string>;
//    *
//    * cancel(id: number): void;
//    *
//    * processNext(): Promise<boolean>;
//    *
//    * size(): number;
//    */
// }

// 3 / 6

function createRequestQueue() {
    return {
        queue: [],
        map: new Map(),
        enqueue: async function (id, request) {
            // console.log(this)
            this.map.set(id, this.queue.length);
            this.queue.push(request);
            return new Promise(async (res, rej) => {
                try {
                    const data = await request();
                    console.log(data)

                    // if this id is cancelled
                    if(!this.map.get(id)) {
                        rej(data);
                        // return Promise.reject(new Error());
                        // throw new Error();
                    } else {
                        // return res(data);
                        res(data);
                        // return Promise.resolve(data);
                    }


                } catch (error) {
                    // throw new Error();
                     rej(error.message);
                    // return Promise.reject(error.message);
                }
            })
        },
        cancel: function (id) {
            if (this.map.has(id) === false) return;

            // let promise = this.map.get(id);

            // if(!promise) return;
            let index = this.map.get(id);
            this.queue.splice(index, 1);
            this.map.delete(id);
        },
        processNext: async function() {

            try {
                let nextTask = queue.shift();
                let temp = [nextTask];
                let res = await Promise.allSettled(temp);
                if(res[0].status == 'resolved') return Promise.resolve(true);
                return Promise.resolve(false);
            }
            catch(e) {
                return Promise.resolve(false);
            }
        },
        size: function() {
            return this.queue.length
        }
    }
}

module.exports = { createRequestQueue };
