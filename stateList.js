var states = [
    'Alabama',
    'Alaska',
    'American Samoa',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Guam',
    'Hawaii',
    'Idaho', 
    'Illinois', 
    'Indiana', 
    'Iowa', 
    'Kansas', 
    'Kentucky', 
    'Louisiana', 
    'Maine',
    'Maryland', 
    'Massachusetts', 
    'Michigan',
    'Minnesota',
    'Mississippi', 
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'the Northern Mariana Islands',
    'Ohio',
    'Oklahoma',
    'Oregon', 
    'Pennsylvania', 
    'Puerto Rico', 
    'Rhode Island', 
    'South Carolina', 
    'South Dakota', 
    'Tennessee', 
    'Texas', 
    'Utah', 
    'Vermont', 
    'the Virgin Islands', 
    'Virginia', 
    'Washington', 
    'Washington, D.C.', 
    'West Virginia', 
    'Wisconsin',
    'Wyoming'
]
function randState()
{
    var randNum = Math.floor(Math.random() * states.length);
    document.getElementById('randState').innerHTML = states[randNum];
}
