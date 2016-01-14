
function addMenu() {
	
	// create array
	var menuitems = [];
	
	// define array (name, page, icon)
	menuitems[0] = ['Home', 'home.html', 'ion-ios-home-outline']; 
	menuitems[1] = ['Social media', 'social-media.html', 'ion-social-rss']; 
	menuitems[2] = ['Nieuws', 'nieuws.html', 'ion-paper-airplane']; 
	menuitems[3] = ['Dagverslagen 2016', 'dagverslagen.html', 'ion-ios-paper-outline'];
	menuitems[4] = ['Gastenboek', 'gastenboek.html', 'ion-ios-book-outline'];
	menuitems[5] = ['Contact', 'contact.html', 'ion-ios-information-outline'];
	
	createMenu(menuitems); 
}

function createMenu (menuitems) {
	for(i=0; i<menuitems.length; i++){
		menuitem = createItem(menuitems[i][0], menuitems[i][1], menuitems[i][2]);	
	}
}

function createItem(name, page, icon) {
		
	link = document.createElement('a');
	link.setAttribute("class", "w-clearfix w-inline-block nav-menu-link"); 
	link.setAttribute("data-load", "1");
	
	var wrapDiv = document.createElement("div");
	wrapDiv.setAttribute("class", "icon-list-menu"); 
	
	var iconDiv = document.createElement("div");
	
	var titleDiv = document.createElement("div");
	titleDiv.setAttribute("class", "nav-menu-titles"); 
	
	iconDiv.setAttribute("class", "icon "+icon); // EDIT icon
	titleDiv.innerHTML = name; // EDIT name
	link.href = page; // EDIT page
	
	wrapDiv.appendChild(iconDiv);
	link.appendChild(wrapDiv);
	link.appendChild(titleDiv);
	
	$( ".nav-menu" ).append( link );
}

