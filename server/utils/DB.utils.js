async function getManyDocs(collection, query, successCb = () => {}, failCb = () => {}) {
    const options = [(error, collectionArray) => {
        if (error) throw new Error(`error on getManyDocs: ${error}`);
        !collectionArray ? failCb() : successCb(collectionArray)
    }]
    if (query) options.unshift(query)
    try {
        await collection.find(...options)
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
            successCb(docs);
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
    const methods = {
        strict: user => {
            user.password = undefined;
            user.token = undefined;
            user.messages = undefined;
            user.notifications = undefined;
            user.phone = undefined;
            user.tags = undefined
            return user;
        },
        self: user => {
            user.password = undefined;
            user.token = undefined;
            return user;
        },
        fallbackMethod: user => {
            user.password = undefined;
            user.token = undefined;
            user.messages = undefined;
            user.notifications = undefined;
            return user;
        }
    }
    const newObj = new Object(userItem)
    const setObject = obj => methods[method] ? methods[method](obj) : methods.fallbackMethod(obj)
    if (newObj instanceof Array) {
        let results = [];
        newObj.forEach(user => {
            results.push(setObject(user))
        })
        return results;
    }
    if (typeof userItem === 'object') return setObject(newObj)
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