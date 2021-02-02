const MongoClient = require('mongodb').MongoClient;

//connection URL
const url = "mongodb://localhost:27017";

//DataBase Name
const dbName = 'test';

//New Mongo Client
const client = new MongoClient(url,{ useUnifiedTopology: true });


client.connect()
        .then((connection)=>{
            console.log("Connected to Mongo");
            const db = client.db(dbName);
            const col = db.collection('demo');
            // console.log({ col });
            // console.log({ db });

            //InsertOne
            // col.insertOne({ a:1 })
            //     .then((result)=>{
            //         console.log(result.ops);
            //     })
            //     .catch((err)=>{
            //         console.log({ err });
            //     });

            // col.insertOne({ a:10,
            //                 b: ()=>{ return 'Hello  I am Function'; } },
            //                 {
            //                     w:'majority',
            //                     wtimeout:10000,
            //                     serializeFunctions:true
            //                 })
            //                 .then((result)=>{
            //                     console.log(result.ops);
            //                 })
            //                 .catch((err)=>{
            //                     console.log(err);
            //                 });
            

            //InsertMany
            // col.insertMany([{a:3},{a:2}])
            //     .then((result)=>{
            //         console.log(result.ops);
            //     })
            //     .catch((err)=>{
            //         console.log({ err });
            //     });

            //UpdateOne
            // col.updateOne({a:1},{$set : {b:2}})
            //     .then((result)=>{
            //         console.log(result);
            //     })
            //     .catch((err)=>{
            //         console.log({ err });
            //     });

            //updateMany
            // col.updateMany({a:1},{$set:{b:3}})
            //     .then((result)=>{
            //         console.log(result);
            //     })
            //     .catch((err)=>{
            //         console.log({ err });
            //     });

            //deleteOne
            // col.deleteOne({a:1})
            //     .then((result)=>{
            //         console.log(result);
            //     })
            //     .catch((err)=>{
            //         console.log({ err });
            //     });

            //deleteMany
            // col.deleteMany({ a:1 })
            //     .then((result)=>{
            //         console.log(result);
            //     })
            //     .catch((err)=>{
            //         console.log({ err });
            //     });

            //findOneandUpdate,findonrAndDelete,findOneAndReplace,findOne
            // col.findOne({a:3})
            //     .then((result)=>{
            //         console.log(result);
            //     })
            //     .catch((err)=>{
            //         console.log({ err });
            //     });
            
            // col.findOneAndUpdate({a:3},{$set:{b:1}},{ returnOriginal:false })
            //     .then((result)=>{
            //         console.log(result);
            //     })
            //     .catch((err)=>{
            //         console.log({ err });
            //     });

            // col.findOneAndReplace({b:2},{ a:1 })
            //     .then((result)=>{
            //         console.log(result);
            //     })
            //     .catch((err)=>{
            //         console.log({ err });
            //     });

            // col.findOneAndDelete({a:1})
            //     .then((result)=>{
            //         console.log(result);
            //     })
            //     .catch((err)=>{
            //         console.log({ err });
            //     });


            // col.bulkWrite([
            //     { insertOne: { document: { a: 1 } } },
            //     { updateOne: { filter: {a:2}, update: {$set: {a:2}}, upsert:true } },
            //     { updateMany: { filter: {a:2}, update: {$set: {a:2}}, upsert:true } },
            //     { deleteOne: { filter: {c:1} } },
            //     { deleteMany: { filter: {c:1} } },
            //     { replaceOne: { filter: {c:3}, replacement: {c:4}, upsert:true}}
            // ],{ ordered:true })
            //     .then((result)=>{
            //         console.log(result);
            //     })
            //     .catch((err)=>{
            //         console.log({ err });
            //     });

            //bulk write Operation
            // let bulk = col.initializeOrderedBulkOp();
            // let i;
            // for(i=0;i<10;i++){
            //     bulk.insert({ a:i });
            // }
            // bulk.execute()
            //         .then((result)=>{
            //             console.log(result);
            //         })
            //         .catch((err)=>{
            //             console.log({ err });
            //         });

            //Read Operation
            // col.find({a:1}).skip(1).limit(1).toArray()
            //     .then((result)=>{
            //         console.log(result);
            //         client.close();
            //     })
            //     .catch((err)=>{
            //         console.log({ err });
            //     });

            // col.find({a:1}).next()
            //                 .then((result)=>{
            //                     console.log(result);
            //                     client.close();
            //                 })
            //                 .catch((err)=>{
            //                     console.log({ err });
            //                 });

            // col.find({ a:3 })
            //     .project({ b: 1 })
            //     .toArray()
            //     .then((result)=>{
            //         console.log(result);
            //     })
            //     .catch((err)=>{
            //         console.log(err);
            //     });

            //count document
            // col.countDocuments({a:1})
            //     .then((result)=>{
            //         console.log(result);
            //     })
            //     .catch((err)=>{
            //         console.log({ err });
            //     });

            //distinct value of property
            // col.distinct('a')
            //     .then((r)=>{
            //         console.log(r);
            //     })
            //     .catch((err)=>{
            //         console.log({ err });
            //     });

            // col.aggregate([
            //     { '$match' : { 'b':1 }},
            //     { '$group' : { '_id':'a', "sum": {'$sum':1} }}
            // ]).toArray()
            // .then((result)=>{
            //     console.log(result);
            // })
            // .catch((err)=>{
            //     console.log({ err });
            // });

            //Database Status
            // db.command({'dbStats': 1})
            //     .then((result)=>{
            //         console.log(result);
            //         client.close();
            //     })
            //     .catch((err)=>{
            //         console.log({ err });
            //     });

            // col.createIndex({ a:-1 })
            //     .then((result)=>{
            //         console.log(result);
            //     })  
            //     .catch((err)=>{
            //         console.log(err);
            //     });

        })
        .catch((err)=>{
            console.log({ err });
        });