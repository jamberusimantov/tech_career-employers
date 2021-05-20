const { response } = require("express");
async function getAllDocs(collection, successCb = () => {}, failCb = () => {}) {
    try {
        await collection.find((error, collectionArray) => {
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
async function postDoc(collection, doc, successCb = () => {}) {
    try {
        await collection.insertMany(doc, (error) => {
            if (error) throw new Error(`error on postDoc: ${error}`);
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
    const newObj = new Object(userItem)
    const setObject = () => methods[method] ? methods[method](newObj) : methods.fallbackMethod
    if (userItem instanceof Array) {
        let results = [];
        userItem.forEach(user => {
            results.push(setObject(user))
        })
        return results;
    }
    if (typeof userItem === 'object') return setObject(userItem)
}

module.exports = {
    getAllDocs,
    getDoc,
    postDoc,
    updateDoc,
    deleteDoc,
    filteredPrivateProps
}