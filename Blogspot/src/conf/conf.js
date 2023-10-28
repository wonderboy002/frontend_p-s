const conf={
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    databaseId : String(import.meta.env.VITE_DATABASE_ID),
    projectId : String(import.meta.env.VITE_PROJECT_ID),
    bucketId : String(import.meta.env.VITE_BUCKET_ID),
    collectionId : String(import.meta.env.VITE_COLLECTION_ID),
};

export default conf;