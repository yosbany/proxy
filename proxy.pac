function FindProxyForURL(url, host) {
	if (shExpMatch(host, "*.whatsapp.*") || shExpMatch(host, "*.ibm.*) || shExpMatch(host, "*box*)){
		return "PROXY proxy.emea.ibm.com:8080";
	}
	else if(shExpMatch(host, "*.bse.com.uy*")){
		return "DIRECT";
	}	
	else{
		return "PROXY proxy.bse.com.uy:8080";
	}		
}
