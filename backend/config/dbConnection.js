import mongoose from "mongoose";

const dbConnection =  async () => {
    try {
      await  mongoose.connect(process.env.MONGO_URL);
      console.log('Mongodb connected successfully');
    } catch (error) {    
         throw new Error('failed to mongodb database')
    }
}

export default dbConnection;