extends Control



func _ready():

	var prompts = ["Hello", "Bye"]	
	var story = "Once upon a time %s. and then %s"
	print(story % prompts) # beware of arguments count mismatch; in story and prompts
#	prompts = ["", ""]
	
	$DisplayText.text = "hello world"
	var finalStory = (story % prompts)
	$Story.text = (story % prompts)