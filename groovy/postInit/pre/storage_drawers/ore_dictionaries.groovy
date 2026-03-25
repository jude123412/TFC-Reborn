def drawers = [
    item('storagedrawers:customdrawers'),
    item('storagedrawers:customdrawers', 1),
    item('storagedrawers:customdrawers', 2),
    item('storagedrawers:customdrawers', 3),
    item('storagedrawers:customdrawers', 4),
    item('storagedrawers:customdrawers', 4),
]

for (item in drawers) {
    ore_dict.add("drawerFramed", item)
}