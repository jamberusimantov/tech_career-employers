async function getManyDocs(collection, query = {}, successCb = () => {}, failCb = () => {}) {
    try {
        await collection.find(query, (error, collectionArray) => {
            if (error) throw new Error(`error on getManyDocs: ${error}`);
            console.log(collectionArray);
            !collectionArray ? failCb() : successCb(collectionArray)
        })
    } catch (error) {
        return { success: false, error }
    } finally {}
}
async function getAllDocsByQuery(collection, query, successCb = () => {}, failCb = () => {}) {
    try {
        await collection.find(query, (error, collectionArray) => {
            if (error) throw new Error(`error on getAllDocs: ${error}`);
            !collectionArray ? failCb() : successCb(collectionArray)
        })
    } catch (error) {
        return { success: false, error }
    } finally {}
}
async function getDoc(collection, query, successCb = () => {}, failCb = () => {}) {

    try {
        await collection.findOne(query, (error, doc) => {
            if (error) throw new Error(`error on getDoc: ${error}`);
            !doc ? failCb() : successCb(doc)
        })
    } catch (error) {
        return { success: false, error };
    } finally {}
}
async function postDocs(collection, docs, successCb = () => {}) {
    try {
<<<<<<< HEAD
        await collection.insertMany(doc, (error, data) => {
            if (error) throw new Error(`error on postDoc: ${error}`);
            successCb(data);
=======
        await collection.insertMany(docs, (error) => {
            if (error) throw new Error(`error on postDocs: ${error}`);
            successCb();
>>>>>>> d0f8f22a1042fb1baf21a895996fc069eed221d8
        })
    } catch (error) {
        return { success: false, error };
    } finally {}
}
async function updateDoc(collection, doc, successCb = () => {}, failCb = () => {}) {
    const { _id } = doc;
    if (!_id) throw new Error('id is required on updateDoc');
    const query = { _id }
    try {
        await collection.findOneAndUpdate(query, doc, async(error, docFromDb) => {
            if (error) throw new Error(`error on updateDoc: ${error}`);
            !docFromDb ? failCb() : successCb(docFromDb);
        })
    } catch (error) {
        return { success: false, error };
    } finally {}
}
async function deleteDoc(collection, doc, successCb = () => {}, failCb = () => {}) {
    const { _id } = doc;
    if (!_id) throw new Error('id is required on deleteDoc');
    const query = { _id }
    try {
        await collection.findOneAndRemove(query, (error, docFromDb) => {
            if (error) throw new Error(`error on deleteDoc: ${error}`);
            !docFromDb ? failCb() : successCb(docFromDb);
        })
    } catch (error) {
        return { success: false, error };
    } finally {}
}
const filteredPrivateProps = (userItem, method = 'strict') => {
    const newObj = new Object(userItem)
    const methods = {
        strict: newObj => {
            newObj.password = undefined;
            newObj.token = undefined;
            newObj.messages = undefined;
            newObj.notifications = undefined;
            newObj.phone = undefined;
            newObj.tags = undefined
            return newObj;
        },
        self: newObj => {
            newObj.password = undefined;
            newObj.token = undefined;
            return newObj;
        },
        fallbackMethod: newObj => {
            newObj.password = undefined;
            newObj.token = undefined;
            newObj.messages = undefined;
            newObj.notifications = undefined;
            return newObj;
        }
    }

    const setObject = (user) => methods[method] ? methods[method](user) : methods.fallbackMethod
    
    if (typeof newObj === 'object') return setObject(newObj)
    if (userItem instanceof Array) {
        let results = [];
        userItem.forEach(user => {
            results.push(setObject(user))
        })
        console.log(results);
        return results;
    }
}
const msgs = {
    requiredToken: serviceName => `required auth token on ${serviceName}`,
    requiredQuery: serviceName => `required query data on ${serviceName}`,
    unauthorizedToken: serviceName => `unauthorized token on ${serviceName}`,
    unauthorizedCredentials: serviceName => `unauthorized credentials on ${serviceName}`,
    corruptId: serviceName => `corrupt id on ${serviceName}`,
    success: serviceName => `success on ${serviceName}`,
    failure: serviceName => `failure on ${serviceName}`,
    err: (serviceName, error) => `error on ${serviceName}: ${error}`,
}

module.exports = {
<<<<<<< HEAD
    getAllDocs,
    getAllDocsByQuery,
=======
    getManyDocs,
>>>>>>> d0f8f22a1042fb1baf21a895996fc069eed221d8
    getDoc,
    postDocs,
    updateDoc,
    deleteDoc,
    filteredPrivateProps,
    msgs
}