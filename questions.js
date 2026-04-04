const questionSections = {

A: [
{q:"Line in design is used to:",o:["Fill space","Define edges and movement","Add weight","Balance color"],a:"Define edges and movement"},
{q:"Which is NOT a primary color?",o:["Red","Blue","Yellow","Green"],a:"Green"},
{q:"Texture refers to:",o:["Color depth","Surface quality (visual/tactile)","Size","Shape"],a:"Surface quality (visual/tactile)"},
{q:"Harmony in design means:",o:["Random placement","Visual agreement between elements","Contrast only","Repetition"],a:"Visual agreement between elements"},
{q:"Rhythm in design creates:",o:["Stillness","Movement and flow","Chaos","Contrast"],a:"Movement and flow"},
{q:"Balance can be:",o:["Symmetrical & Asymmetrical","Only symmetrical","Only visual","Only physical"],a:"Symmetrical & Asymmetrical"},
{q:"Which element creates illusion of depth?",o:["Line","Color","Perspective","Texture"],a:"Perspective"},
{q:"Monochromatic scheme uses:",o:["Multiple colors","One color with variations","Opposite colors","Bright colors"],a:"One color with variations"},
{q:"Contrast helps in:",o:["Reducing clarity","Creating emphasis","Removing focus","Flattening design"],a:"Creating emphasis"},
{q:"Which principle organizes design?",o:["Chaos","Unity","Isolation","Noise"],a:"Unity"},
{q:"Scale refers to:",o:["Color","Size relation to human/body/space","Texture","Pattern"],a:"Size relation to human/body/space"},
{q:"Proportion is about:",o:["Alignment","Relative size of elements","Color choice","Texture"],a:"Relative size of elements"},
{q:"Which is warm color?",o:["Blue","Green","Red","Purple"],a:"Red"},
{q:"Which is cool color?",o:["Orange","Yellow","Blue","Red"],a:"Blue"},
{q:"Repetition creates:",o:["Rhythm","Chaos","Contrast","Depth"],a:"Rhythm"},
{q:"Which shape is organic?",o:["Square","Triangle","Leaf shape","Rectangle"],a:"Leaf shape"},
{q:"Typography relates to:",o:["Space","Fonts and text design","Color","Lighting"],a:"Fonts and text design"},
{q:"Negative space is:",o:["Dark color","Empty area around design elements","Pattern","Background image"],a:"Empty area around design elements"},
{q:"Which creates dominance?",o:["Small element","Focal point","Background","Repetition"],a:"Focal point"},
{q:"Pattern is:",o:["Random design","Repeated decorative element","Single color","Texture only"],a:"Repeated decorative element"},
{q:"Which is NOT a design principle?",o:["Balance","Rhythm","Gravity","Contrast"],a:"Gravity"},
{q:"Value in design means:",o:["Cost","Lightness/darkness of color","Texture","Shape"],a:"Lightness/darkness of color"},
{q:"A bold color scheme shows:",o:["Subtlety","Strong visual impact","Weak contrast","Neutral tone"],a:"Strong visual impact"},
{q:"Which improves readability?",o:["Clutter","Contrast & spacing","Small fonts","Dark background only"],a:"Contrast & spacing"},
{q:"Visual hierarchy helps:",o:["Confuse viewer","Guide viewer’s eye","Remove focus","Flatten design"],a:"Guide viewer’s eye"},
{q:"Which element is tactile?",o:["Texture","Color","Line","Shape"],a:"Texture"},
{q:"Symmetry gives:",o:["Balance & stability","Chaos","Movement","Depth"],a:"Balance & stability"},
{q:"Which color is neutral?",o:["Red","Blue","Grey","Yellow"],a:"Grey"},
{q:"Gradient is:",o:["Sudden color change","Smooth color transition","Pattern","Texture"],a:"Smooth color transition"},
{q:"Alignment ensures:",o:["Randomness","Order & structure","Movement","Depth"],a:"Order & structure"}
],

B: [
{q:"Series: 2, 4, 8, 16, __",o:["18","24","32","30"],a:"32"},
{q:"Series: 3, 6, 9, 12, __",o:["14","15","16","18"],a:"15"},
{q:"Series: 5, 10, 20, 40, __",o:["60","70","80","100"],a:"80"},
{q:"Series: 1, 4, 9, 16, __",o:["20","24","25","30"],a:"25"},
{q:"Series: 7, 14, 21, 28, __",o:["32","35","36","40"],a:"35"},

{q:"Circle, Square, Triangle, Table",o:["Circle","Square","Triangle","Table"],a:"Table"},
{q:"Red, Blue, Green, Wood",o:["Red","Blue","Green","Wood"],a:"Wood"},
{q:"Cotton, Silk, Wool, Plastic",o:["Cotton","Silk","Wool","Plastic"],a:"Plastic"},
{q:"Chair, Sofa, Bed, Painting",o:["Chair","Sofa","Bed","Painting"],a:"Painting"},
{q:"Marble, Granite, Tile, Paper",o:["Marble","Granite","Tile","Paper"],a:"Paper"},

{q:"Pattern: A B C A B C __",o:["A","B","D","C"],a:"A"},
{q:"Pattern: 1 3 5 7 __",o:["8","9","10","11"],a:"9"},

{q:"Fabric : Garment :: Wood : ?",o:["Chair","Color","Thread","Paint"],a:"Chair"},
{q:"Needle : Stitch :: Pencil : ?",o:["Draw","Erase","Cut","Fold"],a:"Draw"},
{q:"Blueprint : Building :: Sketch : ?",o:["Design","Fabric","Pattern","Color"],a:"Design"},
{q:"Color : Painting :: Fabric : ?",o:["Garment","Thread","Machine","Print"],a:"Garment"},
{q:"Space : Interior :: Body : ?",o:["Fashion","Color","Fabric","Style"],a:"Fashion"},

{q:"If a square is cut diagonally, it forms:",o:["Triangle","Circle","Rectangle","Pentagon"],a:"Triangle"},
{q:"A cube has 6 faces. Corner cube painted faces:",o:["1","2","3","4"],a:"3"},
{q:"Mirror image of L faces:",o:["Same","Opposite","Upward","Downward"],a:"Opposite"},
{q:"Rotate rectangle 90° changes:",o:["Shape","Size","Orientation","Color"],a:"Orientation"},
{q:"Folding paper twice creates layers:",o:["2","3","4","6"],a:"4"}
],

C: [
{q:"When starting a new design project, you usually:",o:["Wait for detailed instructions","Start researching references","Experiment with your own ideas first","Ask others what to do"],a:"Experiment with your own ideas first"},
{q:"When your design idea fails, you:",o:["Feel discouraged and stop","Try again with a different approach","Copy a safer idea","Ignore the problem"],a:"Try again with a different approach"},
{q:"You enjoy tasks where:",o:["Outcome is predictable","You can experiment and explore","Instructions are fixed","Risk is minimal"],a:"You can experiment and explore"},
{q:"Your approach to learning design is:",o:["Follow step-by-step teaching","Learn by observing and experimenting","Memorize techniques","Avoid mistakes"],a:"Learn by observing and experimenting"},
{q:"If given complete creative freedom, you feel:",o:["Confused","Nervous","Excited and motivated","Indifferent"],a:"Excited and motivated"},
{q:"When working on a group design project, you:",o:["Prefer to follow others","Take initiative and contribute ideas","Avoid responsibility","Let others decide"],a:"Take initiative and contribute ideas"},
{q:"If you see an unusual design idea, you:",o:["Reject it immediately","Analyze and understand it","Ignore it","Copy it"],a:"Analyze and understand it"},
{q:"Creativity for you means:",o:["Following trends","Thinking differently","Repeating ideas","Avoiding risks"],a:"Thinking differently"},
{q:"When facing a difficult design challenge, you:",o:["Give up","Seek multiple solutions","Avoid the task","Wait for help"],a:"Seek multiple solutions"},
{q:"You feel most confident when:",o:["Given strict instructions","Working independently","Copying examples","Avoiding risks"],a:"Working independently"},

{q:"If your design is criticized, you:",o:["Feel discouraged","Use feedback to improve","Ignore criticism","Defend your work strongly"],a:"Use feedback to improve"},
{q:"When exploring ideas, you prefer:",o:["Safe options","Innovative approaches","Copying trends","Avoiding risk"],a:"Innovative approaches"},
{q:"Your thinking style is:",o:["Logical only","Creative and flexible","Rigid","Uncertain"],a:"Creative and flexible"},
{q:"You prefer design work that is:",o:["Predictable","Experimental","Routine","Simple"],a:"Experimental"},
{q:"In design tasks, you usually:",o:["Follow instructions","Create new ideas","Avoid responsibility","Wait for help"],a:"Create new ideas"},

{q:"When learning new skills, you:",o:["Memorize","Practice and explore","Avoid trying","Copy others"],a:"Practice and explore"},
{q:"Your approach to problem solving is:",o:["Avoid problems","Think creatively","Follow others","Ignore"],a:"Think creatively"},
{q:"You enjoy:",o:["Routine tasks","Creative challenges","Easy tasks","Simple work"],a:"Creative challenges"},
{q:"Innovation requires:",o:["Fear","Confidence and experimentation","Copying","Avoidance"],a:"Confidence and experimentation"},
{q:"When given freedom, you:",o:["Feel lost","Feel motivated","Avoid work","Copy ideas"],a:"Feel motivated"},

{q:"Your creative strength is:",o:["Copying","Original thinking","Avoiding mistakes","Following trends"],a:"Original thinking"},
{q:"Design thinking involves:",o:["Copying designs","Understanding and solving problems creatively","Ignoring user needs","Following trends"],a:"Understanding and solving problems creatively"},
{q:"When you see a problem, you:",o:["Ignore it","Find solutions","Wait","Avoid"],a:"Find solutions"},
{q:"You feel satisfied when:",o:["Work is easy","You create something new","You copy work","Work is finished quickly"],a:"You create something new"},
{q:"You prefer:",o:["Fixed rules","Creative freedom","Strict structure","Instructions"],a:"Creative freedom"},

{q:"Your learning style is:",o:["Passive","Active and experimental","Avoiding","Copying"],a:"Active and experimental"},
{q:"When working under pressure, you:",o:["Panic","Stay focused","Quit","Avoid"],a:"Stay focused"},
{q:"You improve your work by:",o:["Ignoring feedback","Practicing and refining","Copying","Avoiding"],a:"Practicing and refining"},
{q:"Creativity grows with:",o:["Fear","Practice and exploration","Avoidance","Copying"],a:"Practice and exploration"},
{q:"You like tasks that:",o:["Are repetitive","Allow innovation","Are simple","Have no challenge"],a:"Allow innovation"},

{q:"You approach new ideas with:",o:["Fear","Curiosity","Disinterest","Confusion"],a:"Curiosity"},
{q:"When designing, you focus on:",o:["Speed","Creativity and functionality","Copying","Avoiding mistakes"],a:"Creativity and functionality"},
{q:"You learn best by:",o:["Reading only","Doing and experimenting","Copying","Avoiding"],a:"Doing and experimenting"},
{q:"Your design decisions are based on:",o:["Guesswork","Research and creativity","Copying","Avoiding"],a:"Research and creativity"},
{q:"You feel motivated when:",o:["Tasks are easy","Tasks are challenging","No work","Simple work"],a:"Tasks are challenging"},

{q:"Your attitude towards mistakes:",o:["Avoid them","Learn from them","Ignore them","Fear them"],a:"Learn from them"},
{q:"Creative people are:",o:["Rigid","Flexible thinkers","Fearful","Passive"],a:"Flexible thinkers"},
{q:"You express ideas through:",o:["Copying","Original thinking","Avoiding","Following"],a:"Original thinking"},
{q:"You prefer design work that is:",o:["Monotonous","Dynamic","Predictable","Fixed"],a:"Dynamic"},
{q:"You solve problems by:",o:["Ignoring","Thinking creatively","Copying","Avoiding"],a:"Thinking creatively"},

{q:"Your creative confidence is:",o:["Low","High when exploring","Dependent","Avoiding"],a:"High when exploring"},
{q:"Design success depends on:",o:["Luck","Creativity and effort","Copying","Avoiding"],a:"Creativity and effort"},
{q:"When facing new challenges, you:",o:["Avoid","Accept and explore","Copy","Ignore"],a:"Accept and explore"},
{q:"You prefer working:",o:["Under strict rules","With creative freedom","Avoiding","Following"],a:"With creative freedom"},
{q:"Your mindset is:",o:["Fixed","Growth oriented","Avoiding","Passive"],a:"Growth oriented"}
],

D: [
// Q101–120 EXACT (Fashion Design)
{q:"Which fabric is most breathable for summer wear?",o:["Wool","Polyester","Cotton","Velvet"],a:"Cotton"},
{q:"Silk is known for:",o:["Rough texture","Smooth and lustrous finish","Heavy weight","Stretchability"],a:"Smooth and lustrous finish"},
{q:"Which fabric is synthetic?",o:["Cotton","Linen","Polyester","Silk"],a:"Polyester"},
{q:"Denim is primarily made from:",o:["Wool","Cotton","Silk","Nylon"],a:"Cotton"},
{q:"Fabric drape refers to:",o:["Color","How fabric falls and flows on the body","Texture","Thickness"],a:"How fabric falls and flows on the body"},
{q:"Silhouette in fashion refers to:",o:["Fabric type","Shape of the garment","Stitch type","Color"],a:"Shape of the garment"},
{q:"Draping technique involves:",o:["Drawing design","Arranging fabric on a dress form/mannequin","Cutting patterns","Sewing"],a:"Arranging fabric on a dress form/mannequin"},
{q:"Pattern making is:",o:["Decoration","Creating templates for garment construction","Dyeing","Printing"],a:"Creating templates for garment construction"},
{q:"Seam is:",o:["Fabric","Stitch line joining two pieces of fabric","Pattern","Color"],a:"Stitch line joining two pieces of fabric"},
{q:"Which tool is essential for measuring body dimensions?",o:["Scale","Measuring tape","Brush","Cutter"],a:"Measuring tape"}
],

E: [
{q:"What is the Full form of NIF in NIF Global?",o:["New york Institute of Fashion","National Institute of Fashion","New Institute of Fashion","National Investment Funds"],a:"New york Institute of Fashion"},
{q:"What is the full form of NSDC",o:["National School of Design and Construction","National Skill Development Corporation","National Skill in Design Corporation","National School of Drama & Creativity"],a:"National Skill Development Corporation"},
{q:"What is NEP-2020?",o:["New Education Programme- 2020","National Employment Policy- 2020","National Education Policy- 2020","National Election Pool- 2020"],a:"National Education Policy- 2020"},
{q:"What is the full form of WISE?",o:["Work Integrated Skill Education","World Institute of Secondary Education","Women’s Initiative for Self-Empowerment","World Innovation Summit for Education."],a:"Work Integrated Skill Education"},
{q:"Which Bollywood celebrity is associated with NIF Global?",o:["Manish Malhotra","Gauri Khan","All of these","Ananya Pandey"],a:"All of these"},
{q:"Which all international fashion weeks can a student at NIF Global participate in?",o:["New York Fashion Week","London Fashion Week","Dubai Fashion Week","All of the above"],a:"All of the above"},
{q:"Which is the highest undergraduate design qualification in India?",o:["B.Des.","B.Sc.","B.Voc.","D.Voc."],a:"B.Des."},
{q:"How many years has NIF Global been into existence in Ludhiana?",o:["10 years","28 years","12 years","5 years"],a:"28 years"},
{q:"In what format will you receive your marksheets upon completion of your programme?",o:["All of these","Printed marksheets","Email","Digilocker"],a:"All of these"},
{q:"Which all countries can you visit as a student of NIF Global?",o:["UK","USA","All of these","Dubai"],a:"All of these"}
]

};