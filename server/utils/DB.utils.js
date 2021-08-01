async function getManyDocs(collection, query, successCb = (collectionArray) => {}, failCb = () => {}) {
    const options = [(error, collectionArray) => {
        if (error) throw new Error(`error on getManyDocs: ${error}`);
        console.log(collectionArray.length);
        !collectionArray ? failCb() : successCb(collectionArray)
    }]
    if (query) options.unshift(query)
    try {
        await collection.find(...options)
    } catch (error) {
        return { success: false, error }
    } finally {}
}
async function getDoc(collection, query, successCb = (doc) => {}, failCb = () => {}) {

    try {
        await collection.findOne(query, (error, doc) => {
            if (error) throw new Error(`error on getDoc: ${error}`);
            !doc ? failCb() : successCb(doc)
        })
    } catch (error) {
        return { success: false, error };
    } finally {}
}
async function postDocs(collection, docs, successCb = (docs) => {}) {
    try {
        await collection.insertMany(docs, (error) => {
            if (error) throw new Error(`error on postDocs: ${error}`);
            successCb(docs);
        })
    } catch (error) {
        return { success: false, error };
    } finally {}
}
async function updateDoc(collection, doc, successCb = (doc) => {}, failCb = () => {}) {
    try {
        const { _id } = doc;
        if (!_id) return 'id is required'
        const query = { _id }
        await collection.findOneAndUpdate(query, doc, (error, docFromDb) => {
            if (error) console.error(error.message);
            !docFromDb ? failCb() : successCb(docFromDb);
        })
    } catch (error) {
        return { success: false, error };
    } finally {}
}
async function deleteDoc(collection, doc, successCb = (doc) => {}, failCb = () => {}) {
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

        strict: newObj => {
            newObj.notifications = undefined;
            newObj.messages = undefined;
            newObj.pictures = undefined;
            newObj.friends = undefined;


            newObj.password = undefined;
            newObj.token = undefined;
            newObj.phone = undefined;
            newObj.cv = undefined
            return newObj;
        },
        self: newObj => {
            newObj.notifications = undefined;
            newObj.messages = undefined;
            newObj.pictures = undefined;
            newObj.friends = undefined;
            newObj.password = undefined;


            newObj.password = undefined;
            newObj.token = undefined;
            return newObj;
        },
        fallbackMethod: newObj => {
            newObj.notifications = undefined;
            newObj.messages = undefined;
            newObj.pictures = undefined;
            newObj.friends = undefined;



            newObj.password = undefined;
            newObj.token = undefined;
            newObj.phone = undefined;
            newObj.cv = undefined
            return newObj;
        }

    }
    return methods[method] ? methods[method](userItem) : methods.fallbackMethod(userItem);
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