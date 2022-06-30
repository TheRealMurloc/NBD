printjson(db.people.aggregate([
    {$set: 
	{bmi: {$multiply: [{$divide: [{$toDouble: '$weight'}, {$pow: [ {$toDouble: '$height'}, 2]}]}, 10000]}}
    },
    {$group: 
	{
            _id: '$nationality',
            avg: {$avg: '$bmi'},
            min: {$min: '$bmi'},
            max: {$max: '$bmi'}
	}
    }
]).toArray())
