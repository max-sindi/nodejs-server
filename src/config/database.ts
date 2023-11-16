import mongoose from 'mongoose'

const connectToMongodbDatabase = async (
  uri: string,
) => {
  const connection = await mongoose.connect(uri)
  console.log(connection)
}

export { connectToMongodbDatabase }
