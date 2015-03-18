function counterCreator(number){
	var counter = number;
	return function(){
		counter ++;
    return counter;
  };
};

function countAnnouncer(baked_good, baked_good_counter){
	return function(){
		return "Now serving" + " " + baked_good + " " + "number" + " " + baked_good_counter() + "!";
	};
};
