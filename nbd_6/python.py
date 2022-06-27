import riak

myClient = riak.RiakClient(pb_port=8087)
myBucket = myClient.bucket('s17203')

#inserting

card = {"Brand": "AMD", "Model": "RX6500XT", "Compute Units": 80, "Stream Processors": 5120, "Memory Type": "GDDR6", "Memory Bandwidth": "Up to 512 GB/s"}
key = myBucket.new('RX6900XT', data=card)
key.store()

#get data

object = myBucket.get('RX6900XT')
print('Card:' + str(object.data))

#edit data

object.data["Stream Processors"] = 4900
object.store()

#get modified data

object = myBucket.get('RX6900XT')
print('Edited Card:' + str(object.data))

#delete

object.delete()

#get object after delete

object = myBucket.get('RX6900XT')
print('Deleted Card:' + str(object.data))
