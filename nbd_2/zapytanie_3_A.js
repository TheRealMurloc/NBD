printjson(db.people.aggregate(
    {$group: 
	{
	    _id: null,
	    job: {$addToSet: "$job" }
	}
    },
    {$unwind: "$job"},
    {$project: { _id: 0, job: 1}}
).toArray());
