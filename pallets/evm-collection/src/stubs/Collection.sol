// SPDX-License-Identifier: OTHER
// This code is automatically generated

pragma solidity >=0.8.0 <0.9.0;

// Common stubs holder
contract Dummy {
	uint8 dummy;
	string stub_error = "this contract is implemented in native";
}

contract ERC165 is Dummy {
	function supportsInterface(bytes4 interfaceID)
		external
		view
		returns (bool)
	{
		require(false, stub_error);
		interfaceID;
		return true;
	}
}

// Selector: d32d5104
contract Collection is Dummy, ERC165 {
	// Selector: create721Collection(string,string,string) 951c0151
	function create721Collection(
		string memory name,
		string memory description,
		string memory tokenPrefix
	) public view returns (address) {
		require(false, stub_error);
		name;
		description;
		tokenPrefix;
		dummy;
		return 0x0000000000000000000000000000000000000000;
	}

	// Selector: setSponsor(address,address) f01fba93
	function setSponsor(address collectionAddress, address sponsor)
		public
		view
	{
		require(false, stub_error);
		collectionAddress;
		sponsor;
		dummy;
	}

	// Selector: confirmSponsorship(address) abc00001
	function confirmSponsorship(address collectionAddress) public view {
		require(false, stub_error);
		collectionAddress;
		dummy;
	}

	// Selector: setOffchainShema(address,string) d7dc2de3
	function setOffchainShema(address collectionAddress, string memory shema)
		public
		view
	{
		require(false, stub_error);
		collectionAddress;
		shema;
		dummy;
	}

	// Selector: setVariableOnChainSchema(address,string) 582691c3
	function setVariableOnChainSchema(
		address collectionAddress,
		string memory variable
	) public view {
		require(false, stub_error);
		collectionAddress;
		variable;
		dummy;
	}

	// Selector: setConstOnChainSchema(address,string) 921456e7
	function setConstOnChainSchema(
		address collectionAddress,
		string memory constOnChain
	) public view {
		require(false, stub_error);
		collectionAddress;
		constOnChain;
		dummy;
	}
}
