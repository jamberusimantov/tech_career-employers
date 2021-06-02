async function getManyDocs(collection, query, successCb = () => {}, failCb = () => {}) {
    const options = [(error, collectionArray) => {
        if (error) throw new Error(`error on getManyDocs: ${error}`);
        !collectionArray ? failCb() : successCb(collectionArray)
    }]
    if (query) options.unshift(query)
    try {
<<<<<<< HEAD
        await collection.find(query, (error, collectionArray) => {
            if (error) throw new Error(`error on getManyDocs: ${error}`);
            console.log(collectionArray);
            !collectionArray ? failCb() : successCb(collectionArray)
        })
=======
        await collection.find(...options)
>>>>>>> f4d0b8448a7cc1459ae32cecf9b32e6d6f4c0236
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
        await collection.insertMany(docs, (error) => {
            if (error) throw new Error(`error on postDocs: ${error}`);
            successCb();
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
<<<<<<< HEAD

    const setObject = (user) => methods[method] ? methods[method](user) : methods.fallbackMethod
    
    if (typeof newObj === 'object') return setObject(newObj)
    if (userItem instanceof Array) {
=======
    const newObj = new Object(userItem)
    const setObject = obj => methods[method] ? methods[method](obj) : methods.fallbackMethod(obj)
    if (newObj instanceof Array) {
>>>>>>> f4d0b8448a7cc1459ae32cecf9b32e6d6f4c0236
        let results = [];
        newObj.forEach(user => {
            results.push(setObject(user))
        })
        console.log(results);
        return results;
    }
<<<<<<< HEAD
=======
    if (typeof userItem === 'object') return setObject(newObj)
>>>>>>> f4d0b8448a7cc1459ae32cecf9b32e6d6f4c0236
}
const msgs = {
    requiredToken: serviceName => `required auth token on ${serviceName}`,
    requiredQuery: serviceName => `required query data on ${serviceName}`,
    unSignUser: serviceName => `unSign user on ${serviceName}, finish sign up`,
    unauthorizedToken: serviceName => `unauthorized token on ${serviceName}`,
    unauthorizedCredentials: serviceName => `unauthorized credentials on ${serviceName}`,
    corruptId: serviceName => `corrupt id on ${serviceName}`,
    success: serviceName => `success on ${serviceName}`,
    failure: serviceName => `failure on ${serviceName}`,
    err: (serviceName, error) => `error on ${serviceName}: ${error}`,
}

module.exports = {
    getManyDocs,
    getDoc,
    postDocs,
    updateDoc,
    deleteDoc,
    filteredPrivateProps,
    msgs
}