{
  "_id" : ObjectId("5dca9c5ece5b91119746eece"),
  "updatedAt" : ISODate("2019-11-20T11:48:55.339Z"),
  "attributeSet" : [ 
      {
          "attributeSetName" : "test-0",
          "type" : "Product",
          "id" : "1574158032603",
          "updatedAt" : ISODate("2019-11-19T10:10:53.783Z"),
          "createdAt" : ISODate("2019-11-19T10:07:20.084Z"),
          "attributes" : [ 
              {
                  "attributeName" : "test-attribute",
                  "defaultValue" : 123,
                  "isRequired" : false,
                  "id" : "1574221129398"
              }, 
              {
                  "attributeName" : "test-attribute-02",
                  "defaultValue" : 456,
                  "isRequired" : false,
                  "id" : "1574250533840"
              }
          ]
      }, 
      {
          "attributeSetName" : "test-1",
          "type" : "Product",
          "id" : "1574158116355",
          "updatedAt" : ISODate("2019-11-19T10:08:37.251Z"),
          "createdAt" : ISODate("2019-11-19T10:08:37.251Z"),
          "attributes" : []
      }
    ]
  }


 


db.collection.findOneAndUpdate(
  {
    _id: settingsToBeUpdated._id,
    attributeSet: {
      $elemMatch: {
        id: attributeSetId,
        "attributes.id": id
      }
    }
  },
  {
    $set: {
      "attributeSet.$[as].attributes.$[a].attributeName":
        attributeDto.attributeName,
      "attributeSet.$[as].attributes.$[a].defaultValue":
        attributeDto.defaultValue,
      "attributeSet.$[as].attributes.$[a].isRequired": attributeDto.isRequired
    }
  },
  {
    arrayFilters: [{ "as.id": attributeSetId }, { "a.id": id }],
    returnNewDocument: true
  }
);


{
  _id:1,
  list_id:23,
  name:'list01'
  cards:[
   {
    id:3,
    name:'card01'
    categories:[{
     id:10,
     category:'section01',
     tags:[{id:11,name:'tag01',is_selected: true}]
   }] 
   }
  ]
 }

db.collection.update({
  "list_id": 23,
  "cards.categories.category": "section01"
},
{
  $push: {
    "cards.$.categories.$[elem].tags": {
      name: "tag02",
      id: uuidv4(),
      is_selected: true
    }
  }
},
{
  arrayFilters: [
    {
      "elem.category": "section01"
    }
  ],
  multi: true
})