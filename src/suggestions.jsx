const roles = {
  man_woman: [
    {
      words: ['ad-man', 'ad-woman'],
      suggestion: 'ad-person',
      others: 'advertising executive, promoter',
    },
    {words: ['airman', 'airwoman'], suggestion: 'airperson', others: 'air crew member, pilot'},
    {words: ['alderman', 'alderwoman'], suggestion: 'alderperson', others: 'council member'},
    {
      words: ['anchorman', 'anchorwoman'],
      suggestion: 'anchorperson',
      others: 'anchor, commentator, newscaster',
    },
    {
      words: ['assemblyman', 'assemblywoman'],
      suggestion: 'assemblyperson',
      others: 'assembly member',
    },
    {words: ['barman', 'barwoman'], suggestion: 'barperson', others: 'barkeeper'},
    {words: ['bondsman', 'bondswoman'], suggestion: 'bondsperson', others: 'guarantor, insurer'},
    {words: ['boss man', 'boss woman'], suggestion: 'boss', others: 'chief, president, leader'},
    {
      words: ['brakeman', 'brakewoman'],
      suggestion: 'brake operator',
      others: "train conductor's assistant",
    },
    {
      words: ['businessman', 'businesswoman'],
      suggestion: 'businessperson',
      others: 'executive, manager',
    },
    {
      words: ['cameraman', 'camerawoman'],
      suggestion: 'cameraperson',
      others: 'camera operator, cinematographer',
    },
    {
      words: ['careerman', 'careerwoman'],
      suggestion: 'careerperson',
      others: 'business person, professional',
    },
    {words: ['caveman', 'cavewoman'], suggestion: 'cave person', others: 'cave dweller'},
    {
      words: ['chairman', 'chairwoman'],
      suggestion: 'chairperson',
      others: 'chair, coordinator, head',
    },
    {words: ['clergyman', 'clergywoman'], suggestion: 'clergyperson', others: 'clergy member'},
    {words: ['councilman', 'councilwoman'], suggestion: 'councilperson', others: 'council member'},
    {
      words: ['committeeman', 'committeewoman'],
      suggestion: 'committeeperson',
      others: 'committee member',
    },
    {
      words: ['confidence-man', 'confidence-woman'],
      suggestion: 'confidence-person',
      others: 'swindler, crook',
    },
    {
      words: ['congressman', 'congresswoman'],
      suggestion: 'congressperson',
      others: 'congressional representative, legislator',
    },
    {
      words: ['contact-man', 'contact-woman'],
      suggestion: 'contact-person',
      others: 'contact, coordinator',
    },
    {
      words: ['countryman', 'countrywoman'],
      suggestion: 'countryperson',
      others: 'compatriot, fellow citizen',
    },
    {
      words: ['craftsman', 'craftswoman'],
      suggestion: 'craftsperson',
      others: 'crafter, craft maker, artisan',
    },
    {words: ['crewman', 'crewwoman'], suggestion: 'crewperson', others: 'crew member'},
    {
      words: ['dairyman', 'dairywoman'],
      suggestion: 'dairyperson',
      others: 'dairy farmer, dairy worker',
    },
    {
      words: ['deliveryman', 'deliverywoman'],
      suggestion: 'deliveryperson',
      others: 'deliverer, courier, clerk',
    },
    {
      words: ['doorman', 'doorwoman'],
      suggestion: 'doorperson',
      others: 'door attendant, security guard',
    },
    {words: ['draftsman', 'draftswoman'], suggestion: 'draftsperson', others: 'drafter'},
    {
      words: ['enlisted man', 'enlisted woman'],
      suggestion: 'enlisted person',
      others: 'enlistee, soldier, recruit',
    },
    {
      words: ['everyman', 'everywoman'],
      suggestion: 'everyperson',
      others: 'the common person, the average person',
    },
    {words: ['fall guy', 'fall gal'], suggestion: 'fall person', others: 'scapegoat'},
    {words: ['fireman', 'firewoman'], suggestion: 'firefighter', others: ''},
    {words: ['fisherman', 'fisherwoman'], suggestion: 'fisherperson', others: 'fisher, angler'},
    {words: ['foreman', 'forewoman'], suggestion: 'foreperson', others: 'manager, supervisor'},
    {
      words: ['freshman', 'freshwoman'],
      suggestion: 'first-year student',
      others: 'first-year member',
    },
    {words: ['gentleman', 'gentlewoman'], suggestion: 'gentleperson', others: ''},
    {
      words: ['handyman', 'handywoman'],
      suggestion: 'handyperson',
      others: 'repair person, maintenance worker',
    },
    {
      words: ['horseman', 'horsewoman'],
      suggestion: 'horseperson',
      others: 'horse rider, equestrian',
    },
    {
      words: ['layman', 'laywoman'],
      suggestion: 'layperson',
      others: 'church member, nonordained person',
    },
    {words: ['kinsman', 'kinswoman'], suggestion: 'kinsperson', others: 'relative'},
    {
      words: ['lawman', 'lawwoman'],
      suggestion: 'lawperson',
      others: 'law enforcement officer, sheriff',
    },
    {
      words: ['layman', 'laywoman'],
      suggestion: 'layperson',
      others: 'nonprofessional, amateur, civilian',
    },
    {words: ['letterman', 'letterwoman'], suggestion: 'letterperson', others: 'varsity athelete'},
    {
      words: ['lineman', 'linewoman', 'linesman', 'lineswoman'],
      suggestion: 'lineperson',
      others: 'line worker, line maintainer',
    },
    {
      words: ['mailman', 'mailwoman'],
      suggestion: 'mail carrier',
      others: 'letter carrier, postal worker',
    },
    {words: ['middleman', 'middlewoman'], suggestion: 'intermediary', others: 'go-between'},
    {words: ['newsman', 'newswoman'], suggestion: 'newsperson', others: 'reporter, correspondent'},
    {
      words: ['ombudsman', 'ombudswoman'],
      suggestion: 'ombudsperson',
      others: 'investigator, appointee',
    },
    {words: ['outdoorsman', 'outdoorswoman'], suggestion: 'outdoors person', others: ''},
    {words: ['patrolman', 'patrolwoman'], suggestion: 'patrolperson, patrol officer, patroller'},
    {words: ['policeman', 'policewoman'], suggestion: 'police officer', others: ''},
    {words: ['postman', 'postwoman'], suggestion: 'mail carrier, letter carrier, postal worker'},
    {words: ['pressman', 'presswoman'], suggestion: 'press operator', others: ''},
    {
      words: ['prodigal son', 'prodigal daughter'],
      suggestion: 'prodigal child',
      others: 'returning child',
    },
    {
      words: ['repairman', 'repairwoman'],
      suggestion: 'repairperson',
      others: 'maintenance person, technician',
    },
    {words: ['schoolboy', 'schoolgirl'], suggestion: 'schoolchild', others: 'student'},
    {words: ['snowman', 'snowwoman'], suggestion: 'snowperson', others: ''},
    {
      words: ['spokesman', 'spokeswoman'],
      suggestion: 'spokesperson',
      others: 'speaker, representative',
    },
    {
      words: ['sportsman', 'sportswoman'],
      suggestion: 'sportsperson',
      others: 'sport player, athelete, teammate',
    },
    {
      words: ['sportsmanlike', 'sportswomanlike'],
      suggestion: 'sportspersonlike',
      others: 'sportlike, sporting, sporty',
    },
    {
      words: ['sportsmanship', 'sportswomanship'],
      suggestion: 'sportspersonship',
      others: 'sportship, sporting, sporty',
    },
    {
      words: ['statesman', 'stateswoman'],
      suggestion: 'statesperson',
      others: 'political leader, policy maker, diplomat',
    },
    {
      words: ['watchman', 'watchwoman'],
      suggestion: 'watchperson',
      others: 'guard, attendant, security officer',
    },
    {
      words: ['weatherman', 'weatherwoman'],
      suggestion: 'weatherperson',
      others: 'weathercaster, weather forecaster, weather reporter',
    },
  ],
  boy_girl: [
    {words: ['bagboy', 'baggirl'], suggestion: 'bagperson', others: 'bagger, assistant, caddy'},
    {words: ['batboy', 'batgirl'], suggestion: 'batperson', others: 'bat assistant, caddy'},
    {words: ['bellboy', 'bellgirl'], suggestion: 'bellperson', others: 'bellhop, hotel attendant'},
    {
      words: ['busboy', 'busgirl'],
      suggestion: 'busperson',
      others: 'busser, bus staffer, kitchen helper',
    },
    {
      words: ['cabinboy', 'cabingirl'],
      suggestion: 'cabinperson',
      others: 'cabin attendant, cabin helper',
    },
    {
      words: ['choirboy', 'choirgirl'],
      suggestion: 'choirperson',
      others: 'choir member, choir singer',
    },
    {
      words: ['chorusboy', 'chorusgirl'],
      suggestion: 'chorusperson',
      others: 'chorus member, chorus singer',
    },
    {words: ['copyboy', 'copygirl'], suggestion: 'copyperson', others: 'copy clerk, copy maker'},
    {words: ['cowboy', 'cowgirl'], suggestion: 'cowperson', others: 'cowhand, ranch hand'},
    {words: ['flyboy', 'flygirl'], suggestion: 'flyperson', others: 'pilot, aviator'},
    {words: ['boy Friday', 'girl Friday'], suggestion: 'aide', others: 'assistant, helper'},
    {
      words: ['newsboy', 'newsgirl'],
      suggestion: 'newsperson',
      others: 'news seller, paper carrier',
    },
    {
      words: ['officeboy', 'officegirl'],
      suggestion: 'officeperson',
      others: 'clerk, messenger, assistant',
    },
    {
      words: ['paperboy', 'papergirl'],
      suggestion: 'paperperson',
      others: 'paper carrier, paper deliverer',
    },
    {
      words: ['playboy', 'playgirl'],
      suggestion: 'playperson',
      others: 'partier, carouser, pleasure seeker',
    },
  ],
  ess_enne_ette: [
    {words: ['actor, actress'], suggestion: 'actor, performer', others: ''},
    {words: ['comedian, comedienne'], suggestion: 'comedian, humorist', others: ''},
    {words: ['conductor, conductress'], suggestion: 'conductor, coordinator', others: ''},
    {words: ['host, hostess'], suggestion: 'host, welcomer', others: ''},
    {words: ['major, majorette'], suggestion: 'major, dancer', others: ''},
    {words: ['masseur, masseuse'], suggestion: 'masseur, massage therapist', others: ''},
    {words: ['patron, patroness'], suggestion: 'patron, funder', others: ''},
    {words: ['priest, priestess'], suggestion: 'priest, clergy', others: ''},
    {words: ['sculptor, sculptress'], suggestion: 'sculptor, artist', others: ''},
    {words: ['sorcerer, sorceress'], suggestion: 'sorcerer, enchanter', others: ''},
    {words: ['shepherd, shepherdess'], suggestion: 'shepherd, herder', others: ''},
    {words: ['steward, stewardess'], suggestion: 'steward, attendant', others: ''},
    {words: ['tempter, temptress'], suggestion: 'tempter, enticer', others: ''},
    {words: ['usher, usherette'], suggestion: 'usher, assistant', others: ''},
    {words: ['waiter, waitress'], suggestion: 'waiter, server', others: ''},
  ],
  master_mistress: [
    {
      words: ['brewmaster', 'brewmistress'],
      suggestion: 'brewmaker',
      others: 'brew leader, brewer',
    },
    {
      words: ['headmaster', 'headmistress'],
      suggestion: 'headmaker',
      others: 'head leader, head of school, principal',
    },
    {
      words: ['shipmaster', 'shipmistress'],
      suggestion: 'shipmaker',
      others: 'ship leader, captain, commander',
    },
    {
      words: ['taskmaster', 'taskmistress'],
      suggestion: 'taskmaker',
      others: 'task leader, tasker, director, supervisor, tyrant',
    },
    {
      words: ['toastmaster', 'toastmistress'],
      suggestion: 'toastmaker',
      others: 'toast leader, toaster, announcer, head of ceremonies',
    },
  ],
  phrases: [
    // https://github.com/joelparkerhenderson/gender-inclusive-language#phrases
  ],
  general: [
    {
      words: ['boy', 'girl'],
      suggestion: 'person',
      others: 'individual, child',
    },
    {
      words: ['boyfriend', 'girlfriend'],
      suggestion: 'friend',
      others: 'date, partner, companion, consort, significant other',
    },
    {
      words: ['man', 'woman'],
      suggestion: 'person',
      others: 'individual, adult',
    },
    {
      words: ['mankind', 'womankind'],
      suggestion: 'people',
      others: 'humans, humanity',
    },
    {
      words: ['husband', 'wife'],
      suggestion: 'spouse',
      others: 'consort',
    },
  ],
};

const suggestions = [
  // Roles with -man or -woman
  ...roles.man_woman,
  // Roles with -boy or -girl
  ...roles.boy_girl,
  // Roles with -ess -enne -ette
  ...roles.ess_enne_ette,
  // Roles with -master or -mistress
  ...roles.master_mistress,
  // Phrases
  ...roles.general,
];

export default suggestions;
