const questionSections = {

A: [
{q:"Line in design is used to:",o:["Fill space","Add weight","Define edges and movement","Balance color"],a:"Define edges and movement"},
{q:"Which is NOT a primary color?",o:["Red","Blue","Yellow","Green"],a:"Green"},
{q:"Texture refers to:",o:["Color depth","Surface quality (visual/tactile)","Size","Shape"],a:"Surface quality (visual/tactile)"},
{q:"Harmony in design means:",o:["Visual agreement between elements","Random placement","Contrast only","Repetition"],a:"Visual agreement between elements"},
{q:"Rhythm in design creates:",o:["Stillness","Movement and flow","Chaos","Contrast"],a:"Movement and flow"},
{q:"Balance can be:",o:["Symmetrical & Asymmetrical","Only symmetrical","Only visual","Only physical"],a:"Symmetrical & Asymmetrical"},
{q:"Which element creates illusion of depth?",o:["Line","Color","Perspective","Texture"],a:"Perspective"},
{q:"Monochromatic scheme uses:",o:["Multiple colors","One color with variations","Opposite colors","Bright colors"],a:"One color with variations"},
{q:"Contrast helps in:",o:["Reducing clarity","Removing focus","Creating emphasis","Flattening design"],a:"Creating emphasis"},
{q:"Which principle organizes design?",o:["Chaos","Isolation","Unity","Noise"],a:"Unity"},
{q:"Scale refers to:",o:["Color","Size relation to human/body/space","Texture","Pattern"],a:"Size relation to human/body/space"},
{q:"Proportion is about:",o:["Relative size of elements","Alignment","Color choice","Texture"],a:"Relative size of elements"},
{q:"Which is warm color?",o:["Blue","Green","Red","Purple"],a:"Red"},
{q:"Which is cool color?",o:["Orange","Yellow","Blue","Red"],a:"Blue"},
{q:"Repetition creates:",o:["Rhythm","Chaos","Contrast","Depth"],a:"Rhythm"},
{q:"Which shape is organic?",o:["Square","Triangle","Leaf shape","Rectangle"],a:"Leaf shape"},
{q:"Typography relates to:",o:["Space","Lighting","Color","Fonts and text design"],a:"Fonts and text design"},
{q:"Negative space is:",o:["Dark color","Background image","Pattern","Empty area around design elements"],a:"Empty area around design elements"},
{q:"Which creates dominance?",o:["Small element","Repetition","Background","Focal point"],a:"Focal point"},
{q:"Pattern is:",o:["Repeated decorative element","Random design","Single color","Texture only"],a:"Repeated decorative element"},
{q:"Which is NOT a design principle?",o:["Balance","Rhythm","Gravity","Contrast"],a:"Gravity"},
{q:"Value in design means:",o:["Cost","Lightness/darkness of color","Texture","Shape"],a:"Lightness/darkness of color"},
{q:"A bold color scheme shows:",o:["Subtlety","Neutral tone","Weak contrast","Strong visual impact"],a:"Strong visual impact"},
{q:"Which improves readability?",o:["Clutter","Small fonts","Contrast & spacing","Dark background only"],a:"Contrast & spacing"},
{q:"Visual hierarchy helps:",o:["Confuse viewer","Guide viewer’s eye","Remove focus","Flatten design"],a:"Guide viewer’s eye"},
{q:"Which element is tactile?",o:["Texture","Color","Line","Shape"],a:"Texture"},
{q:"Symmetry gives:",o:["Balance & stability","Chaos","Movement","Depth"],a:"Balance & stability"},
{q:"Which color is neutral?",o:["Red","Blue","Grey","Yellow"],a:"Grey"},
{q:"Gradient is:",o:["Sudden color change","Smooth color transition","Pattern","Texture"],a:"Smooth color transition"},
{q:"Alignment ensures:",o:["Randomness","Depth","Movement","Order & structure"],a:"Order & structure"}
],

B: [
{q:"Complete the series: 2, 4, 8, 16, __",o:["18","24","32","30"],a:"32"},
{q:"Complete the series: 3, 6, 9, 12, __",o:["14","15","16","18"],a:"15"},
{q:"Complete the series: 5, 10, 20, 40, __",o:["60","70","80","100"],a:"80"},
{q:"Complete the series: 1, 4, 9, 16, __",o:["20","24","25","30"],a:"25"},
{q:"Complete the series: 7, 14, 21, 28, __",o:["32","35","36","40"],a:"35"},

{q:"Pick the odd one out: Circle, Square, Triangle, Table",o:["Circle","Table","Triangle","Square"],a:"Table"},
{q:"Pick the odd one out: Red, Blue, Green, Wood",o:["Wood","Blue","Green","Red"],a:"Wood"},
{q:"Pick the odd one out: Cotton, Silk, Wool, Plastic",o:["Cotton","Silk","Plastic","Wool"],a:"Plastic"},
{q:"Pick the odd one out: Chair, Sofa, Bed, Painting",o:["Chair","Painting","Bed","Sofa"],a:"Painting"},
{q:"Pick the odd one out: Marble, Granite, Tile, Paper",o:["Marble","Granite","Tile","Paper"],a:"Paper"},

{q:"Complete the pattern: A B C A B C __",o:["A","B","D","C"],a:"A"},
{q:"Complete the pattern: 1 3 5 7 __",o:["8","9","10","11"],a:"9"},

{q:"Fabric : Garment :: Wood : ?",o:["Chair","Color","Thread","Paint"],a:"Chair"},
{q:"Needle : Stitch :: Pencil : ?",o:["Cut","Erase","Draw","Fold"],a:"Draw"},
{q:"Blueprint : Building :: Sketch : ?",o:["Color","Fabric","Pattern","Design"],a:"Design"},
{q:"Color : Painting :: Fabric : ?",o:["Thread","Garment","Machine","Print"],a:"Garment"},
{q:"Space : Interior :: Body : ?",o:["Fashion","Color","Fabric","Style"],a:"Fashion"},

{q:"If a square is cut diagonally, it forms:",o:["Triangle","Circle","Rectangle","Pentagon"],a:"Triangle"},
{q:"Mirror image of L faces is:",o:["Same","Opposite","Upward","Downward"],a:"Opposite"},
{q:"Rotating rectangle 90 degrees changes:",o:["Shape","Size","Orientation","Color"],a:"Orientation"},
{q:"Folding paper twice creates layers:",o:["2","3","4","6"],a:"4"}
],

C: [
{q:"When starting a new design project, you usually:",o:["Wait for detailed instructions","Start researching references","Experiment with your own ideas first","Ask others what to do"],a:"Experiment with your own ideas first"},
{q:"When your design idea fails, you:",o:["Feel discouraged and stop","Try again with a different approach","Copy a safer idea","Ignore the problem"],a:"Try again with a different approach"},
{q:"You enjoy tasks where:",o:["Outcome is predictable","You can experiment and explore","Instructions are fixed","Risk is minimal"],a:"You can experiment and explore"},
{q:"Your approach to learning design is:",o:["Follow step-by-step teaching","Memorize techniques","Learn by observing and experimenting","Avoid mistakes"],a:"Learn by observing and experimenting"},
{q:"If given complete creative freedom, you feel:",o:["Confused","Nervous","Excited and motivated","Indifferent"],a:"Excited and motivated"},
{q:"When working on a group design project, you:",o:["Prefer to follow others","Let others decide","Avoid responsibility","Take initiative and contribute ideas"],a:"Take initiative and contribute ideas"},
{q:"If you see an unusual design idea, you:",o:["Reject it immediately","Copy it","Ignore it","Analyze and understand it"],a:"Analyze and understand it"},
{q:"Creativity for you means:",o:["Thinking differently","Following trends","Repeating ideas","Avoiding risks"],a:"Thinking differently"},
{q:"When facing a difficult design challenge, you:",o:["Give up","Avoid the task","Seek multiple solutions","Wait for help"],a:"Seek multiple solutions"},
{q:"You feel most confident when:",o:["Given strict instructions","Working independently","Copying examples","Avoiding risks"],a:"Working independently"},

{q:"If your design is criticized, you:",o:["Use feedback to improve","Feel discouraged","Ignore criticism","Defend your work strongly"],a:"Use feedback to improve"},
{q:"When exploring ideas, you prefer:",o:["Safe options","Copying trends","Innovative approaches","Avoiding risk"],a:"Innovative approaches"},
{q:"Your thinking style is:",o:["Logical only","Uncertain","Rigid","Creative and flexible"],a:"Creative and flexible"},
{q:"You prefer design work that is:",o:["Predictable","Experimental","Routine","Simple"],a:"Experimental"},
{q:"In design tasks, you usually:",o:["Create new ideas","Follow instructions","Avoid responsibility","Wait for help"],a:"Create new ideas"},

{q:"When learning new skills, you:",o:["Memorize","Copy others","Avoid trying","Practice and explore"],a:"Practice and explore"},
{q:"Your approach to problem solving is:",o:["Avoid problems","Think creatively","Follow others","Ignore"],a:"Think creatively"},
{q:"You enjoy:",o:["Routine tasks","Creative challenges","Easy tasks","Simple work"],a:"Creative challenges"},
{q:"Innovation requires:",o:["Fear","Copying","Confidence and experimentation","Avoidance"],a:"Confidence and experimentation"},
{q:"When given freedom, you:",o:["Feel lost","Copy ideas","Avoid work","Feel motivated"],a:"Feel motivated"},

{q:"Your creative strength is:",o:["Original thinking","Copying","Avoiding mistakes","Following trends"],a:"Original thinking"},
{q:"Design thinking involves:",o:["Copying designs","Following trends","Ignoring user needs","Understanding and solving problems creatively"],a:"Understanding and solving problems creatively"},
{q:"When you see a problem, you:",o:["Find solutions","Ignore it","Wait","Avoid"],a:"Find solutions"},
{q:"You feel satisfied when:",o:["You create something new","Work is easy","You copy work","Work is finished quickly"],a:"You create something new"},
{q:"You prefer:",o:["Fixed rules","Creative freedom","Strict structure","Instructions"],a:"Creative freedom"},

{q:"Your learning style is:",o:["Passive","Avoiding","Active and experimental","Copying"],a:"Active and experimental"},
{q:"When working under pressure, you:",o:["Stay focused","Panic","Quit","Avoid"],a:"Stay focused"},
{q:"You improve your work by:",o:["Ignoring feedback","Avoiding","Copying","Practicing and refining"],a:"Practicing and refining"},
{q:"Creativity grows with:",o:["Practice and exploration","Fear","Avoidance","Copying"],a:"Practice and exploration"},
{q:"You like tasks that:",o:["Are repetitive","Allow innovation","Are simple","Have no challenge"],a:"Allow innovation"},

{q:"You approach new ideas with:",o:["Fear","Curiosity","Disinterest","Confusion"],a:"Curiosity"},
{q:"When designing, you focus on:",o:["Creativity and functionality","Speed","Copying","Avoiding mistakes"],a:"Creativity and functionality"},
{q:"You learn best by:",o:["Reading only","Doing and experimenting","Copying","Avoiding"],a:"Doing and experimenting"},
{q:"Your design decisions are based on:",o:["Guesswork","Avoiding","Copying","Research and creativity"],a:"Research and creativity"},
{q:"You feel motivated when:",o:["Tasks are easy","Tasks are challenging","No work","Simple work"],a:"Tasks are challenging"},

{q:"Your attitude towards mistakes:",o:["Learn from them","Avoid them","Ignore them","Fear them"],a:"Learn from them"},
{q:"Creative people are:",o:["Rigid","Flexible thinkers","Fearful","Passive"],a:"Flexible thinkers"},
{q:"You express ideas through:",o:["Copying","Avoiding","Original thinking","Following"],a:"Original thinking"},
{q:"You prefer design work that is:",o:["Monotonous","Dynamic","Predictable","Fixed"],a:"Dynamic"},
{q:"You solve problems by:",o:["Ignoring","Copying","Thinking creatively","Avoiding"],a:"Thinking creatively"},

{q:"Your creative confidence is:",o:["Low","High when exploring","Dependent","Avoiding"],a:"High when exploring"},
{q:"Design success depends on:",o:["Creativity and effort","Luck","Copying","Avoiding"],a:"Creativity and effort"},
{q:"When facing new challenges, you:",o:["Avoid","Copy","Accept and explore","Ignore"],a:"Accept and explore"},
{q:"You prefer working:",o:["Under strict rules","Following","Avoiding","With creative freedom"],a:"With creative freedom"},
{q:"Your mindset is:",o:["Growth oriented","Fixed","Avoiding","Passive"],a:"Growth oriented"}
],

D: [
// Q101–120 EXACT (Fashion Design)
{q:"Which fabric is most breathable for summer wear?",o:["Wool","Polyester","Cotton","Velvet"],a:"Cotton"},
{q:"Silk is known for:",o:["Rough texture","Smooth and lustrous finish","Heavy weight","Stretchability"],a:"Smooth and lustrous finish"},
{q:"Which fabric is synthetic?",o:["Cotton","Linen","Polyester","Silk"],a:"Polyester"},
{q:"Denim is primarily made from:",o:["Wool","Cotton","Silk","Nylon"],a:"Cotton"},
{q:"Fabric drape refers to:",o:["Color","Thickness","Texture","How fabric falls and flows on the body"],a:"How fabric falls and flows on the body"},
{q:"Silhouette in fashion refers to:",o:["Fabric type","Shape of the garment","Stitch type","Color"],a:"Shape of the garment"},
{q:"Draping technique involves:",o:["Arranging fabric on a dress form/mannequin","Drawing design","Cutting patterns","Sewing"],a:"Arranging fabric on a dress form/mannequin"},
{q:"Pattern making is:",o:["Decoration","Dyeing","Creating templates for garment construction","Printing"],a:"Creating templates for garment construction"},
{q:"Seam is:",o:["Fabric","Stitch line joining two pieces of fabric","Pattern","Color"],a:"Stitch line joining two pieces of fabric"},
{q:"Which tool is essential for measuring body dimensions?",o:["Measuring tape","Scale","Brush","Cutter"],a:"Measuring tape"}
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
