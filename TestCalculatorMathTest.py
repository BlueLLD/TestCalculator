
points = 50
totalPoints = 69


pointsPercent = (points/totalPoints)*100
print(f"{pointsPercent}%")

def getScore():
    if pointsPercent >= 98:
        return "6"
    if pointsPercent >= 95:
        return "6-"
    if pointsPercent >= 94:
        return "6/5"
    if pointsPercent >= 92:
        return "5/6"
    if pointsPercent >= 88:
        return "5+"
    if pointsPercent >= 83:
        return "5"
    if pointsPercent >= 81:
        return "5-"
    if pointsPercent >= 79:
        return "5/3"
    if pointsPercent >= 77:
        return "4/5"
    if pointsPercent >= 73:
        return "4+"
    if pointsPercent >= 68:
        return "4"
    if pointsPercent >= 64:
        return "4-"
    if pointsPercent >= 62:
        return "4/3"
    if pointsPercent >= 60:
        return "3/4"
    if pointsPercent >= 57:
        return "3+"
    if pointsPercent >= 52:
        return "3"
    if pointsPercent >= 48:
        return "3-"
    if pointsPercent >= 46:
        return "3/2"
    if pointsPercent >= 44:
        return "2/3"
    if pointsPercent >= 41:
        return "2+"
    if pointsPercent >= 33:
        return "2"
    if pointsPercent >= 29:
        return "2-"
    if pointsPercent >= 26.5:
        return "2/1"
    if pointsPercent >= 25:
        return "1/2"
    if pointsPercent >= 22:
        return "1+"
    if pointsPercent >= 17:
        return "1"
    if pointsPercent >= 4:
        return "1-"
    return "0"
print(getScore())
