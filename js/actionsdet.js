
function validateAndInsert(theform) {
	theform.action.value="<%=DETACHEMENT.ACTION_INSERT%>";
	theform.submit(); 
}
function onlySelect(theform) {
	theform.action.value="<%=DETACHEMENT.ACTION_SELECT%>";
	theform.submit(); 
}
function validateAndUpdate(theform) {
	theform.action.value="<%=DETACHEMENT.ACTION_UPDATE%>";
	theform.submit(); 
}
function confirmAndDelete(theform) {
	if(confirm('Voulez-vous vraiment supprimer cet enregistrement ?')) {
		theform.action.value="<%=DETACHEMENT.ACTION_DELETE%>";
		if (theform.action.value == "D")
		{
			theform.submit();  
		}
	}  
}
function effacEcran(theform) {
	theform.action.value = "";
	theform.affiche.value = ""; 
	theform.submit();  
}
function onlySubmit(theform) {
	theform.submit(); 
}

