///Prefs menu (moved to modular_vanderlin_ui - opens the new TGUI character sheet)
/atom/movable/screen/lobby/button/character_setup
	name = "View Character Setup"
	screen_loc = "WEST:19,TOP:-10"
	icon = 'icons/hud/lobby/character_sheet.dmi'
	icon_state = "character_sheet_disabled"
	base_icon_state = "character_sheet"
	enabled = FALSE

/atom/movable/screen/lobby/button/character_setup/Initialize(mapload, datum/hud/hud_owner)
	. = ..()
	if(SSatoms.initialized == INITIALIZATION_INNEW_REGULAR)
		flick("[base_icon_state]_enabled", src)
		set_button_status(TRUE)
	else
		set_button_status(FALSE)
		RegisterSignal(SSatoms, COMSIG_SUBSYSTEM_POST_INITIALIZE, PROC_REF(enable_character_setup))

/atom/movable/screen/lobby/button/character_setup/Click(location, control, params)
	. = ..()
	if(!.)
		return

	var/mob/dead/new_player/new_player = hud.mymob
	if(!new_player)
		return
	var/datum/character_sheet/sheet = new(new_player)
	sheet.ui_interact(new_player)

/atom/movable/screen/lobby/button/character_setup/proc/enable_character_setup()
	SIGNAL_HANDLER
	flick("[base_icon_state]_enabled", src)
	set_button_status(TRUE)