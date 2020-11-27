import mongoose, { ConnectionOptions } from "mongoose"

function connect(): Promise<typeof mongoose> {
  const mongoUri: string = 'mongodb+srv://yamete:pIps2TrmSzEKSHS9@cluster0.tsqq0.mongodb.net/'
  const databaseName: string = 'backend-Proyecto'

  const options: ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  } 

  return mongoose.connect(mongoUri + databaseName, options);
}

export default { connect };