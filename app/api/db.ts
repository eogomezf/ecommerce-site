import { MongoClient, Db, ServerApiVersion } from "mongodb";
//eogomezf:GBVmkDN1dTqZa9vJ
// ${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}

let catcehdClient: MongoClient | null = null;
let cachedDb: Db | null = null;
export async function connectToDb() {
  if (catcehdClient && cachedDb) {
    return { client: catcehdClient, db: cachedDb };
  }
  const uri = `mongodb+srv://eogomezf:GBVmkDN1dTqZa9vJ@cluster0.wrgm0jk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  await client.connect();

  catcehdClient = client;
  cachedDb = client.db("ecommerce-nextjs");

  return { client, db: client.db("ecommerce-nextjs") };

  //  await client.close();
}
