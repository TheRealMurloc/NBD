printjson(db.people.aggregate( [{ $project:{ "_id":0, "imię":"$first_name", "nazwisko":"$last_name", "miasto": "$location.city", "rok_urodzenia": { $substr : ["$birth_date", 0, 4 ] } } }, { $match:{ "rok_urodzenia": { $gt:"2000" } } }]).toArray())
