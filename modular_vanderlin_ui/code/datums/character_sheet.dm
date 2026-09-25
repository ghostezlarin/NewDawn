/datum/character_sheet
	var/mob/dead/new_player/owner

/datum/character_sheet/New(mob/dead/new_player/owner)
	. = ..()
	src.owner = owner

/datum/character_sheet/Destroy()
	owner = null
	return ..()

/datum/character_sheet/ui_state(mob/user)
	return GLOB.new_player_state

/datum/character_sheet/ui_interact(mob/user, datum/tgui/ui)
	ui = SStgui.try_update_ui(user, src, ui)
	if(!ui)
		ui = new(user, src, "CharacterSheet")
		ui.open()

/datum/character_sheet/ui_data(mob/user)
	var/list/data = list()
	if(!owner)
		return data
	var/client/owner_client = owner.client
	data["character_name"] = (owner_client && owner_client.prefs) ? (owner_client.prefs.read_preference(/datum/preference/text/real_name) || "Unnamed") : "Unnamed"
	return data

/datum/character_sheet/ui_act(action, list/params, datum/tgui/ui, datum/ui_state/state)
	. = ..()
	if(.)
		return
	switch(action)
		if("close")
			ui.close()
			return TRUE