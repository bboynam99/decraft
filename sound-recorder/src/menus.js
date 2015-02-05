
var ____________________________ = "A HORIZONTAL RULE / DIVIDER";

var menus = {
	"&File": [
		{
			item: "&New",
			shortcut: "Ctrl+N",
			action: file_new,
			description: "Creates a new sound.",
		},
		{
			item: "&Open",
			shortcut: "Ctrl+O",
			action: file_open,
			description: "Opens an existing sound.",
		},
		{
			item: "&Save",
			shortcut: "Ctrl+S",
			action: file_save,
			description: "Saves the active sound.",
		},
		{
			item: "Save &As",
			shortcut: "Ctrl+Shift+S",
			action: file_save_as,
			description: "Saves the active sound with a new name.",
		},
		{
			item: "&Revert...",
			enabled: function(){},
			action: function(){},
			description: "Reverts changes to the file.",
		},
		{
			item: "&Properties",
			enabled: function(){},
			action: function(){},
			description: "Shows properties for this sound file.",
		},
		____________________________,
		{
			item: "E&xit",
			shortcut: "Alt+F4",
			action: function(){
				close();
			},
			description: "Quits Sound Recorder.",
		}
	],
	"&Edit": [
		/*
		{
			item: "&Undo",
			shortcut: "Ctrl+Z",
			enabled: function(){
				return undos.length >= 1;
			},
			action: undo,
			description: "Undoes the last action.",
		},
		{
			item: "&Repeat",
			shortcut: "F4",
			enabled: function(){
				return redos.length >= 1;
			},
			action: redo,
			description: "Redoes the previously undone action.",
		},
		____________________________,*/
		{
			item: "&Copy",
			shortcut: "Ctrl+C",
			enabled: function(){
				return (typeof chrome !== "undefined") && chrome.permissions;
			},
			action: function(){
				document.execCommand("copy");
			},
			description: "Copies something to the Clipboard",
		},
		{
			item: "&Paste Insert",
			shortcut: "Ctrl+V",
			enabled: function(){
				return (typeof chrome !== "undefined") && chrome.permissions;
			},
			action: function(){
				document.execCommand("paste");
			},
			description: "Inserts the contents of the Clipboard into the sound.",
		},
		{
			item: "Paste Mi&x",
			enabled: function(){
				return (typeof chrome !== "undefined") && chrome.permissions;
			},
			action: function(){
				document.execCommand("paste");
			},
			description: "Mixes the contents of the Clipboard into the sound.",
		},
		____________________________,
		{
			item: "&Insert File...",
			action: function(){},
			description: "Inserts a file into the sound.",
		},
		{
			item: "&Mix with File",
			action: function(){},
			description: "Mixes a file into the sound.",
		},
		____________________________,
		{
			item: "Delete &Before Current Position",
			enabled: function(){},
			action: function(){},
			description: "Deletes all audio before the current position.",
		},
		{
			item: "Delete &After Current Position",
			enabled: function(){},
			action: function(){},
			description: "Deletes all audio after the current position.",
		},
		____________________________,
		{
			item: "A&udio Properties",
			action: function(){},
			description: "Changes microphone and speaker settings.",
		},
	],
	"Effect&s": [
		{
			item: "&Increase Volume (by 25%)",
			action: effects_increase_volume,
			description: "Increases the volume of the sound by 25%.",
		},
		{
			item: "&Decrease Volume",
			action: effects_decrease_volume,
			description: "Decreases the volume of the sound (by 25%?)",
		},
		____________________________,
		{
			item: "I&ncrease Speed (by 100%)",
			action: function(){},
			description: "Makes the sound all squeaky and fast.",
		},
		{
			item: "D&ecrease Speed",
			action: function(){},
			description: "Makes your voice sound really deep and slow.",
		},
		____________________________,
		{
			item: "&Add echo",
			action: function(){},
			description: "Adds an echo to the sound.",
		},
		{
			item: "&Reverse",
			action: effects_reverse,
			description: "Reverses the sound.",
		},
	],
	"&Help": [
		{
			item: "&Help Topics",
			action: function(){},
			description: "Displays Help for the current task or command.",
		},
		____________________________,
		{
			item: "&About Sound Recorder",
			action: function(){},
			description: "Displays information about this application."
		}
	],
};
