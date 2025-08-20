@@ .. @@
 import mongoose from 'mongoose';

 const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/career-guidance';

 if (!MONGODB_URI) {
   throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
 }

-let cached = global.mongoose;
+let cached = (global as any).mongoose;

 if (!cached) {
-  cached = global.mongoose = { conn: null, promise: null };
+  cached = (global as any).mongoose = { conn: null, promise: null };
 }

export default cached