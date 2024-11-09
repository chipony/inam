// No need to refer to rename map because a projection can't be renamed
db.collection.find(
  { status: 'active' }, // Query criteria
  { name: 1, address: 1 } // Projection specifying which fields to include
).toArray((err, docs) => {
  if (err) throw err;
  console.log(docs);
});
