// OlympiStar Question Bank
// 29 topics × 5 questions = 145 questions total
// Subjects: Reasoning (8 topics), Math (7 topics), Science (7 topics), English (7 topics)

const QUESTION_BANK = {

  // ─────────────────────────────────────────────
  // REASONING  (8 topics)
  // ─────────────────────────────────────────────
  Reasoning: {

    'Patterns': [
      {
        text: 'Which shape comes next in the pattern: ○ △ ○ △ ○ ?',
        options: ['○', '△', '□', '◇'],
        correct: 1,
        explanation: 'The pattern alternates circle and triangle, so triangle (△) comes next.'
      },
      {
        text: 'What comes next in the pattern: 2, 4, 6, 8, ?',
        options: ['9', '10', '11', '12'],
        correct: 1,
        explanation: 'Each number increases by 2. After 8 comes 10.'
      },
      {
        text: 'Which colour comes next: Red, Blue, Red, Blue, Red, ?',
        options: ['Red', 'Blue', 'Green', 'Yellow'],
        correct: 1,
        explanation: 'The pattern alternates Red and Blue, so Blue comes next.'
      },
      {
        text: 'What comes next in the pattern: A, C, E, G, ?',
        options: ['H', 'I', 'J', 'K'],
        correct: 1,
        explanation: 'Every letter skips one letter. After G, skip H, so I comes next.'
      },
      {
        text: 'Which number comes next: 1, 4, 9, 16, ?',
        options: ['20', '25', '24', '36'],
        correct: 1,
        explanation: 'These are perfect squares: 1²=1, 2²=4, 3²=9, 4²=16, 5²=25.'
      },
      {
        text: 'What comes next: 3, 6, 12, 24, ?',
        options: ['30', '36', '48', '42'],
        correct: 2,
        explanation: 'Each number is doubled. 24 × 2 = 48.'
      },
      {
        text: 'Which shape comes next: □ □ △ □ □ △ □ □ ?',
        options: ['□', '△', '○', '◇'],
        correct: 1,
        explanation: 'The pattern repeats every 3: square, square, triangle. So triangle comes next.'
      },
      {
        text: 'What comes next: 1, 3, 5, 7, 9, ?',
        options: ['10', '11', '12', '13'],
        correct: 1,
        explanation: 'These are odd numbers increasing by 2. After 9 comes 11.'
      },
      {
        text: 'Find the pattern: 10, 20, 30, 40, ?',
        options: ['45', '50', '55', '60'],
        correct: 1,
        explanation: 'Each number increases by 10. After 40 comes 50.'
      },
      {
        text: 'What comes next: Z, Y, X, W, ?',
        options: ['U', 'V', 'T', 'S'],
        correct: 1,
        explanation: 'The alphabet is going backwards. After W comes V.'
      },
      {
        text: 'Find the next number: 5, 10, 15, 20, ?',
        options: ['22', '25', '30', '24'],
        correct: 1,
        explanation: 'Each number increases by 5. After 20 comes 25.'
      },
      {
        text: 'What comes next: AB, CD, EF, GH, ?',
        options: ['HI', 'IJ', 'JK', 'KL'],
        correct: 1,
        explanation: 'Each pair moves 2 letters forward. After GH comes IJ.'
      },
      {
        text: 'Find the pattern: 2, 6, 18, 54, ?',
        options: ['108', '162', '72', '216'],
        correct: 1,
        explanation: 'Each number is multiplied by 3. 54 × 3 = 162.'
      },
      {
        text: 'What comes next: ★ ○ ★ ○ ○ ★ ○ ○ ○ ★ ?',
        options: ['★', '○ ○ ○ ○', '○', '△'],
        correct: 2,
        explanation: 'After each star, the circles increase by 1. After the 4th star, there should be 4 circles. Next is ○.'
      },
      {
        text: 'Find the next: 100, 95, 90, 85, ?',
        options: ['75', '80', '70', '82'],
        correct: 1,
        explanation: 'Each number decreases by 5. After 85 comes 80.'
      },
      {
        text: 'What comes next: 1, 4, 2, 5, 3, 6, 4, ?',
        options: ['5', '7', '8', '6'],
        correct: 1,
        explanation: 'Two patterns alternate: 1,2,3,4... and 4,5,6,7... Next in second pattern is 7.'
      },
      {
        text: 'Find the pattern: AA, BB, CC, DD, ?',
        options: ['EE', 'FF', 'DE', 'EF'],
        correct: 0,
        explanation: 'Each pair uses the next letter doubled. After DD comes EE.'
      },
      {
        text: 'What comes next: 11, 22, 33, 44, ?',
        options: ['50', '55', '54', '56'],
        correct: 1,
        explanation: 'Each number increases by 11. After 44 comes 55.'
      },
      {
        text: 'Find the next shape: △ △ □ △ △ □ △ △ ?',
        options: ['△', '□', '○', '◇'],
        correct: 1,
        explanation: 'The pattern repeats: triangle, triangle, square. So square comes next.'
      }
      ],

    'Series': [
      {
        text: 'Find the missing number: 3, 6, 9, __, 15',
        options: ['10', '11', '12', '13'],
        correct: 2,
        explanation: 'The series increases by 3 each time. After 9 comes 12.'
      },
      {
        text: 'Find the missing number: 5, 10, 20, 40, __',
        options: ['60', '70', '80', '50'],
        correct: 2,
        explanation: 'Each number is doubled. 40 × 2 = 80.'
      },
      {
        text: 'Find the missing letter: B, D, F, __, J',
        options: ['G', 'H', 'I', 'K'],
        correct: 1,
        explanation: 'Every letter skips one. After F, skip G, so H comes next.'
      },
      {
        text: 'Find the missing number: 100, 90, 80, __, 60',
        options: ['65', '70', '75', '68'],
        correct: 1,
        explanation: 'The series decreases by 10 each time. After 80 comes 70.'
      },
      {
        text: 'Find the missing number: 1, 1, 2, 3, 5, __',
        options: ['6', '7', '8', '9'],
        correct: 2,
        explanation: 'Each number is the sum of the two before it (Fibonacci). 3 + 5 = 8.'
      },
      {
        text: 'Find the missing number: 2, 4, 8, 16, __, 64',
        options: ['24', '28', '32', '48'],
        correct: 2,
        explanation: 'Each number is doubled. 16 × 2 = 32.'
      },
      {
        text: 'Find the missing number: 7, 14, 21, __, 35',
        options: ['24', '25', '28', '30'],
        correct: 2,
        explanation: 'The series increases by 7 each time. After 21 comes 28.'
      },
      {
        text: 'Find the missing number: 50, 45, 40, __, 30',
        options: ['36', '37', '35', '38'],
        correct: 2,
        explanation: 'The series decreases by 5 each time. After 40 comes 35.'
      },
      {
        text: 'Find the missing number: 1, 2, 4, 7, 11, __',
        options: ['14', '15', '16', '17'],
        correct: 2,
        explanation: 'The differences increase by 1: +1, +2, +3, +4, +5. So 11 + 5 = 16.'
      },
      {
        text: 'Find the missing letter: A, D, G, J, __',
        options: ['K', 'L', 'M', 'N'],
        correct: 2,
        explanation: 'Each letter skips 2. A(+3)=D, D(+3)=G, G(+3)=J, J(+3)=M.'
      },
      {
        text: 'Find the missing number: 81, 27, 9, 3, __',
        options: ['0', '1', '2', '6'],
        correct: 1,
        explanation: 'Each number is divided by 3. 3 ÷ 3 = 1.'
      },
      {
        text: 'Find the missing number: 4, 9, 16, 25, __',
        options: ['30', '36', '49', '35'],
        correct: 1,
        explanation: 'These are perfect squares: 2²=4, 3²=9, 4²=16, 5²=25, 6²=36.'
      },
      {
        text: 'Find the missing number: 10, 12, 15, 19, __',
        options: ['22', '23', '24', '25'],
        correct: 2,
        explanation: 'Differences increase by 1: +2, +3, +4, +5. So 19 + 5 = 24.'
      },
      {
        text: 'Find the missing number: 1, 3, 6, 10, 15, __',
        options: ['18', '20', '21', '25'],
        correct: 2,
        explanation: 'Differences increase by 1: +2, +3, +4, +5, +6. So 15 + 6 = 21.'
      },
      {
        text: 'Find the missing number: 99, 88, 77, 66, __',
        options: ['56', '55', '54', '44'],
        correct: 1,
        explanation: 'Each number decreases by 11. After 66 comes 55.'
      },
      {
        text: 'Find the missing number: 2, 3, 5, 8, 12, __',
        options: ['15', '16', '17', '18'],
        correct: 2,
        explanation: 'Differences increase by 1: +1, +2, +3, +4, +5. So 12 + 5 = 17.'
      },
      {
        text: 'Find the missing letter: Z, X, V, T, __',
        options: ['S', 'R', 'Q', 'P'],
        correct: 1,
        explanation: 'Each letter goes back by 2. Z(-2)=X, X(-2)=V, V(-2)=T, T(-2)=R.'
      },
      {
        text: 'Find the missing number: 1000, 500, 250, 125, __',
        options: ['62.5', '100', '75', '50'],
        correct: 0,
        explanation: 'Each number is halved. 125 ÷ 2 = 62.5.'
      },
      {
        text: 'Find the missing number: 3, 9, 27, 81, __',
        options: ['162', '243', '100', '108'],
        correct: 1,
        explanation: 'Each number is multiplied by 3. 81 × 3 = 243.'
      }
    ],

    'Analogy': [
      {
        text: 'Dog is to Puppy as Cat is to ?',
        options: ['Kitten', 'Cub', 'Calf', 'Foal'],
        correct: 0,
        explanation: 'A baby dog is called a puppy. A baby cat is called a kitten.'
      },
      {
        text: 'Book is to Library as Painting is to ?',
        options: ['School', 'Museum', 'Hospital', 'Market'],
        correct: 1,
        explanation: 'Books are kept in a library. Paintings are kept in a museum.'
      },
      {
        text: 'Fish is to Water as Bird is to ?',
        options: ['Tree', 'Sky', 'Nest', 'Cage'],
        correct: 1,
        explanation: 'Fish live in water. Birds live in the sky (air).'
      },
      {
        text: 'Pen is to Write as Scissors is to ?',
        options: ['Sew', 'Cut', 'Draw', 'Paint'],
        correct: 1,
        explanation: 'A pen is used to write. Scissors are used to cut.'
      },
      {
        text: 'Doctor is to Hospital as Teacher is to ?',
        options: ['Library', 'School', 'Office', 'Market'],
        correct: 1,
        explanation: 'A doctor works in a hospital. A teacher works in a school.'
      },
      {
        text: 'Ear is to Hear as Eye is to ?',
        options: ['Smell', 'See', 'Touch', 'Taste'],
        correct: 1,
        explanation: 'Ears are used to hear. Eyes are used to see.'
      },
      {
        text: 'Cow is to Calf as Horse is to ?',
        options: ['Pony', 'Foal', 'Cub', 'Lamb'],
        correct: 1,
        explanation: 'A baby cow is a calf. A baby horse is a foal.'
      },
      {
        text: 'Gloves are to Hands as Shoes are to ?',
        options: ['Legs', 'Feet', 'Arms', 'Knees'],
        correct: 1,
        explanation: 'Gloves cover hands. Shoes cover feet.'
      },
      {
        text: 'Pilot is to Plane as Captain is to ?',
        options: ['Car', 'Ship', 'Train', 'Bus'],
        correct: 1,
        explanation: 'A pilot flies a plane. A captain commands a ship.'
      },
      {
        text: 'Bee is to Hive as Bird is to ?',
        options: ['Cage', 'Nest', 'Tree', 'Sky'],
        correct: 1,
        explanation: 'A bee lives in a hive. A bird lives in a nest.'
      },
      {
        text: 'Knife is to Cut as Needle is to ?',
        options: ['Poke', 'Sew', 'Thread', 'Stitch'],
        correct: 1,
        explanation: 'A knife is used to cut. A needle is used to sew.'
      },
      {
        text: 'Moon is to Night as Sun is to ?',
        options: ['Morning', 'Day', 'Light', 'Heat'],
        correct: 1,
        explanation: 'The moon is seen at night. The sun is seen during the day.'
      },
      {
        text: 'Painter is to Brush as Writer is to ?',
        options: ['Book', 'Pen', 'Paper', 'Ink'],
        correct: 1,
        explanation: 'A painter uses a brush. A writer uses a pen.'
      },
      {
        text: 'Ice is to Cold as Fire is to ?',
        options: ['Smoke', 'Hot', 'Light', 'Ash'],
        correct: 1,
        explanation: 'Ice is cold. Fire is hot.'
      },
      {
        text: 'Mango is to Fruit as Rose is to ?',
        options: ['Plant', 'Flower', 'Garden', 'Thorn'],
        correct: 1,
        explanation: 'Mango is a type of fruit. Rose is a type of flower.'
      },
      {
        text: 'Brick is to Wall as Page is to ?',
        options: ['Pen', 'Book', 'Paper', 'Word'],
        correct: 1,
        explanation: 'Bricks make up a wall. Pages make up a book.'
      },
      {
        text: 'Hen is to Chick as Frog is to ?',
        options: ['Tadpole', 'Larva', 'Pup', 'Cub'],
        correct: 0,
        explanation: 'A baby hen is a chick. A baby frog is a tadpole.'
      },
      {
        text: 'Nose is to Smell as Tongue is to ?',
        options: ['Eat', 'Taste', 'Lick', 'Speak'],
        correct: 1,
        explanation: 'Nose is used to smell. Tongue is used to taste.'
      },
      {
        text: 'Wheel is to Car as Wing is to ?',
        options: ['Sky', 'Bird', 'Feather', 'Fly'],
        correct: 1,
        explanation: 'A wheel helps a car move. A wing helps a bird move (fly).'
      }
    ],

    'Classification': [
      {
        text: 'Which one does NOT belong: Apple, Mango, Carrot, Banana?',
        options: ['Apple', 'Mango', 'Carrot', 'Banana'],
        correct: 2,
        explanation: 'Apple, Mango, and Banana are fruits. Carrot is a vegetable.'
      },
      {
        text: 'Which one does NOT belong: Lion, Tiger, Elephant, Eagle?',
        options: ['Lion', 'Tiger', 'Elephant', 'Eagle'],
        correct: 3,
        explanation: 'Lion, Tiger, and Elephant are land animals. Eagle is a bird.'
      },
      {
        text: 'Which one does NOT belong: Rose, Lily, Tulip, Oak?',
        options: ['Rose', 'Lily', 'Tulip', 'Oak'],
        correct: 3,
        explanation: 'Rose, Lily, and Tulip are flowers. Oak is a tree.'
      },
      {
        text: 'Which one does NOT belong: Chair, Table, Bed, Pencil?',
        options: ['Chair', 'Table', 'Bed', 'Pencil'],
        correct: 3,
        explanation: 'Chair, Table, and Bed are furniture. Pencil is a stationery item.'
      },
      {
        text: 'Which one does NOT belong: Cricket, Football, Chess, Tennis?',
        options: ['Cricket', 'Football', 'Chess', 'Tennis'],
        correct: 2,
        explanation: 'Cricket, Football, and Tennis are outdoor sports. Chess is a board game.'
      },
      {
        text: 'Which one does NOT belong: January, March, Monday, July?',
        options: ['January', 'March', 'Monday', 'July'],
        correct: 2,
        explanation: 'January, March, and July are months. Monday is a day of the week.'
      },
      {
        text: 'Which one does NOT belong: Guitar, Drum, Piano, Painting?',
        options: ['Guitar', 'Drum', 'Piano', 'Painting'],
        correct: 3,
        explanation: 'Guitar, Drum, and Piano are musical instruments. Painting is an art form.'
      },
      {
        text: 'Which one does NOT belong: Red, Blue, Green, Sweet?',
        options: ['Red', 'Blue', 'Green', 'Sweet'],
        correct: 3,
        explanation: 'Red, Blue, and Green are colours. Sweet is a taste.'
      },
      {
        text: 'Which one does NOT belong: Delhi, Mumbai, India, Chennai?',
        options: ['Delhi', 'Mumbai', 'India', 'Chennai'],
        correct: 2,
        explanation: 'Delhi, Mumbai, and Chennai are cities. India is a country.'
      },
      {
        text: 'Which one does NOT belong: Milk, Juice, Water, Bread?',
        options: ['Milk', 'Juice', 'Water', 'Bread'],
        correct: 3,
        explanation: 'Milk, Juice, and Water are liquids. Bread is a solid food.'
      },
      {
        text: 'Which one does NOT belong: Sparrow, Parrot, Bat, Crow?',
        options: ['Sparrow', 'Parrot', 'Bat', 'Crow'],
        correct: 2,
        explanation: 'Sparrow, Parrot, and Crow are birds. Bat is a mammal (not a bird).'
      },
      {
        text: 'Which one does NOT belong: Addition, Subtraction, English, Multiplication?',
        options: ['Addition', 'Subtraction', 'English', 'Multiplication'],
        correct: 2,
        explanation: 'Addition, Subtraction, and Multiplication are math operations. English is a language.'
      },
      {
        text: 'Which one does NOT belong: Carrot, Potato, Apple, Onion?',
        options: ['Carrot', 'Potato', 'Apple', 'Onion'],
        correct: 2,
        explanation: 'Carrot, Potato, and Onion are vegetables. Apple is a fruit.'
      },
      {
        text: 'Which one does NOT belong: Shirt, Trouser, Hat, Sandwich?',
        options: ['Shirt', 'Trouser', 'Hat', 'Sandwich'],
        correct: 3,
        explanation: 'Shirt, Trouser, and Hat are clothing items. Sandwich is food.'
      },
      {
        text: 'Which one does NOT belong: Mercury, Venus, Moon, Mars?',
        options: ['Mercury', 'Venus', 'Moon', 'Mars'],
        correct: 2,
        explanation: 'Mercury, Venus, and Mars are planets. Moon is a natural satellite.'
      },
      {
        text: 'Which one does NOT belong: Hammer, Saw, Spoon, Drill?',
        options: ['Hammer', 'Saw', 'Spoon', 'Drill'],
        correct: 2,
        explanation: 'Hammer, Saw, and Drill are tools. Spoon is a utensil for eating.'
      },
      {
        text: 'Which one does NOT belong: Triangle, Square, Circle, Cube?',
        options: ['Triangle', 'Square', 'Circle', 'Cube'],
        correct: 3,
        explanation: 'Triangle, Square, and Circle are 2D shapes. Cube is a 3D shape.'
      },
      {
        text: 'Which one does NOT belong: Ant, Bee, Spider, Butterfly?',
        options: ['Ant', 'Bee', 'Spider', 'Butterfly'],
        correct: 2,
        explanation: 'Ant, Bee, and Butterfly are insects (6 legs). Spider is an arachnid (8 legs).'
      },
      {
        text: 'Which one does NOT belong: Pencil, Eraser, Ruler, Pillow?',
        options: ['Pencil', 'Eraser', 'Ruler', 'Pillow'],
        correct: 3,
        explanation: 'Pencil, Eraser, and Ruler are stationery items. Pillow is a bedroom item.'
      }
    ],

    'Coding-Decoding': [
      {
        text: 'If CAT is coded as DBU, what is the code for DOG?',
        options: ['EPH', 'COF', 'ENF', 'EPG'],
        correct: 0,
        explanation: 'Each letter is replaced by the next letter in the alphabet. D→E, O→P, G→H, so DOG = EPH.'
      },
      {
        text: 'If APPLE is coded as BQQMF, what is the code for BALL?',
        options: ['CBMM', 'CBNM', 'CBLL', 'DCMM'],
        correct: 0,
        explanation: 'Each letter moves one step forward. B→C, A→B, L→M, L→M, so BALL = CBMM.'
      },
      {
        text: 'If 1=A, 2=B, 3=C, what does 3-1-20 stand for?',
        options: ['CAT', 'BAT', 'CAR', 'CAN'],
        correct: 0,
        explanation: '3=C, 1=A, 20=T. So 3-1-20 = CAT.'
      },
      {
        text: 'If MANGO is coded as NBOHP, what is the code for GRAPE?',
        options: ['HSBQF', 'HSBPF', 'GSBQF', 'HRCQF'],
        correct: 0,
        explanation: 'Each letter moves one step forward. G→H, R→S, A→B, P→Q, E→F, so GRAPE = HSBQF.'
      },
      {
        text: 'If SUN is coded as 19-21-14, what is the code for CAT?',
        options: ['3-1-20', '2-1-20', '3-2-20', '4-1-20'],
        correct: 0,
        explanation: 'Each letter is replaced by its position in the alphabet. C=3, A=1, T=20, so CAT = 3-1-20.'
      },
      {
        text: 'If FISH is coded as GJTI, what is the code for BIRD?',
        options: ['CJSE', 'DJSE', 'CJTE', 'CKSE'],
        correct: 0,
        explanation: 'Each letter moves one step forward: B→C, I→J, R→S, D→E. So BIRD = CJSE.'
      },
      {
        text: 'If A=26, B=25, C=24... Z=1, what is the value of CAT?',
        options: ['24+26+7=57', '3+1+20=24', '24+26+7=57', '24+26+7=57'],
        correct: 0,
        explanation: 'C=24, A=26, T=7. So CAT = 24+26+7 = 57.'
      },
      {
        text: 'If TREE is coded as USFF, what is the code for LEAF?',
        options: ['MFBG', 'MEBG', 'MFCG', 'LFBG'],
        correct: 0,
        explanation: 'Each letter moves one step forward: L→M, E→F, A→B, F→G. So LEAF = MFBG.'
      },
      {
        text: 'If PEN is coded as 16-5-14, what is the code for INK?',
        options: ['9-14-11', '8-13-10', '10-15-12', '9-13-11'],
        correct: 0,
        explanation: 'Each letter = its position: I=9, N=14, K=11. So INK = 9-14-11.'
      },
      {
        text: 'If ROSE is coded as SPTF, what is the code for LILY?',
        options: ['MJMZ', 'MKLY', 'MJLZ', 'NKMZ'],
        correct: 0,
        explanation: 'Each letter moves one step forward: L→M, I→J, L→M, Y→Z. So LILY = MJMZ.'
      },
      {
        text: 'If in a code, COME = DPNF, then GONE = ?',
        options: ['HPOF', 'HPNE', 'GPOF', 'HQOF'],
        correct: 0,
        explanation: 'Each letter moves one step forward: G→H, O→P, N→O, E→F. So GONE = HPOF.'
      },
      {
        text: 'If STAR is coded as 19-20-1-18, what is MOON?',
        options: ['13-15-15-14', '12-14-14-13', '13-16-16-15', '14-15-15-14'],
        correct: 0,
        explanation: 'M=13, O=15, O=15, N=14. So MOON = 13-15-15-14.'
      },
      {
        text: 'If KING is coded as LJOH, what is QUEEN?',
        options: ['RVFFO', 'RVFEO', 'RUFFO', 'QVFFO'],
        correct: 0,
        explanation: 'Each letter moves one step forward: Q→R, U→V, E→F, E→F, N→O. So QUEEN = RVFFO.'
      },
      {
        text: 'If Z=1, Y=2, X=3... A=26, what is the code for SUN?',
        options: ['8+6+13=27', '19+21+14=54', '8+6+13=27', '7+5+12=24'],
        correct: 0,
        explanation: 'S=8, U=6, N=13 (reverse alphabet). So SUN = 8+6+13 = 27.'
      },
      {
        text: 'If HAND is coded as IBOE, what is FOOT?',
        options: ['GPPU', 'GPPV', 'GOPU', 'HPPU'],
        correct: 0,
        explanation: 'Each letter moves one step forward: F→G, O→P, O→P, T→U. So FOOT = GPPU.'
      },
      {
        text: 'If RED is coded as 18-5-4, what is BLUE?',
        options: ['2-12-21-5', '3-13-22-6', '2-11-20-4', '1-12-21-5'],
        correct: 0,
        explanation: 'B=2, L=12, U=21, E=5. So BLUE = 2-12-21-5.'
      },
      {
        text: 'If LAMP is coded as MBNQ, what is DESK?',
        options: ['EFTL', 'EGTL', 'DFTL', 'EFSL'],
        correct: 0,
        explanation: 'Each letter moves one step forward: D→E, E→F, S→T, K→L. So DESK = EFTL.'
      },
      {
        text: 'If RAIN is coded as SBJO, what is WIND?',
        options: ['XJOE', 'XKOE', 'WIOE', 'XJNE'],
        correct: 0,
        explanation: 'Each letter moves one step forward: W→X, I→J, N→O, D→E. So WIND = XJOE.'
      },
      {
        text: 'If BOAT is coded as 2-15-1-20, what is SHIP?',
        options: ['19-8-9-16', '18-8-9-16', '19-9-10-17', '20-8-9-16'],
        correct: 0,
        explanation: 'S=19, H=8, I=9, P=16. So SHIP = 19-8-9-16.'
      }
    ],

    'Mirror Images': [
      {
        text: 'If you look at the letter "b" in a mirror, what do you see?',
        options: ['b', 'd', 'p', 'q'],
        correct: 1,
        explanation: 'A mirror flips the image horizontally. The mirror image of "b" is "d".'
      },
      {
        text: 'What is the mirror image of the number "2"?',
        options: ['2', 'S', 'Z', 'Reversed 2'],
        correct: 3,
        explanation: 'A mirror flips the image left to right, so 2 appears reversed (flipped horizontally).'
      },
      {
        text: 'If you hold the word "MOM" in front of a mirror, what do you see?',
        options: ['MOM', 'WOW', 'MOW', 'MOM reversed'],
        correct: 0,
        explanation: 'MOM is a palindrome and its letters are symmetric, so it looks the same in a mirror.'
      },
      {
        text: 'The mirror image of the letter "p" is?',
        options: ['b', 'd', 'q', 'p'],
        correct: 2,
        explanation: 'A mirror flips left to right. The mirror image of "p" is "q".'
      },
      {
        text: 'If a clock shows 3:00, what time does its mirror image show?',
        options: ['3:00', '9:00', '6:00', '12:00'],
        correct: 1,
        explanation: 'In a mirror, the clock is flipped. 3:00 becomes 9:00 in the mirror image.'
      },
      {
        text: 'What is the mirror image of the letter "E"?',
        options: ['E reversed (Ǝ)', '3', 'W', 'M'],
        correct: 0,
        explanation: 'The mirror image of E is a reversed E, which looks like Ǝ or the number 3.'
      },
      {
        text: 'Which letter looks the SAME in a mirror?',
        options: ['B', 'A', 'F', 'G'],
        correct: 1,
        explanation: 'A is symmetric vertically, so it looks the same in a mirror.'
      },
      {
        text: 'If a clock shows 6:30, what time does its mirror image show?',
        options: ['6:30', '5:30', '12:30', '6:00'],
        correct: 1,
        explanation: 'In a mirror, 6:30 appears as 5:30. Mirror time = 12:00 minus actual time.'
      },
      {
        text: 'Which word reads the SAME in a mirror?',
        options: ['BOOK', 'NOON', 'MOM', 'TOOT'],
        correct: 2,
        explanation: 'MOM has symmetric letters M, O, M — it looks the same in a mirror.'
      },
      {
        text: 'The mirror image of the number "5" looks like?',
        options: ['5 reversed', '2', 'S', '3'],
        correct: 0,
        explanation: 'The mirror image of 5 is a reversed 5 (flipped horizontally).'
      },
      {
        text: 'Which number looks the SAME in a mirror?',
        options: ['2', '3', '8', '6'],
        correct: 2,
        explanation: '8 is symmetric, so it looks the same in a mirror.'
      },
      {
        text: 'If you hold "AMBULANCE" in front of a mirror, it reads?',
        options: ['AMBULANCE reversed', 'ECNALUBMA', 'AMBULANCE', 'Cannot read'],
        correct: 1,
        explanation: 'In a mirror, text appears reversed. AMBULANCE reads as ECNALUBMA.'
      },
      {
        text: 'The mirror image of letter "J" is?',
        options: ['L', 'J reversed', 'F', 'T'],
        correct: 1,
        explanation: 'The mirror image of J is a reversed J (the hook goes the other way).'
      },
      {
        text: 'Which of these shapes looks the SAME in a mirror?',
        options: ['Arrow pointing right', 'Circle', 'Letter R', 'Number 7'],
        correct: 1,
        explanation: 'A circle is perfectly symmetric, so it looks the same in a mirror.'
      },
      {
        text: 'If a clock shows 2:15, what does its mirror image show?',
        options: ['9:45', '10:45', '2:15', '8:45'],
        correct: 0,
        explanation: 'Mirror time of 2:15 is approximately 9:45 (12:00 - 2:15 = 9:45).'
      },
      {
        text: 'The mirror image of "d" is?',
        options: ['b', 'p', 'q', 'd'],
        correct: 0,
        explanation: 'A mirror flips left to right. The mirror image of "d" is "b".'
      },
      {
        text: 'Which capital letter does NOT look the same in a mirror?',
        options: ['O', 'X', 'B', 'T'],
        correct: 2,
        explanation: 'O, X, and T are symmetric. B is not symmetric vertically, so it looks different in a mirror.'
      },
      {
        text: 'If you write "18:10" and hold it to a mirror, what do you see?',
        options: ['01:81', '10:81 reversed', '18:10', '21:01'],
        correct: 0,
        explanation: 'In a mirror, the digits are reversed and flipped. 18:10 appears as 01:81.'
      }
    ],

    'Embedded Figures': [
      {
        text: 'A triangle is hidden inside which shape: a square, a rectangle, a circle, or a pentagon?',
        options: ['Square', 'Rectangle', 'Circle', 'Pentagon'],
        correct: 1,
        explanation: 'A triangle can be embedded inside a rectangle by drawing a diagonal line.'
      },
      {
        text: 'How many triangles are there in a figure made of a big triangle divided into 4 equal smaller triangles?',
        options: ['4', '5', '6', '3'],
        correct: 1,
        explanation: 'There are 4 small triangles plus 1 big triangle = 5 triangles in total.'
      },
      {
        text: 'How many squares can you find in a 2×2 grid of squares?',
        options: ['4', '5', '6', '3'],
        correct: 1,
        explanation: 'There are 4 small squares and 1 large square = 5 squares in total.'
      },
      {
        text: 'A circle is drawn inside a square. Which shape is embedded inside the other?',
        options: ['Square inside circle', 'Circle inside square', 'They overlap', 'Neither'],
        correct: 1,
        explanation: 'The circle is drawn inside the square, so the circle is the embedded figure.'
      },
      {
        text: 'How many rectangles are there in a figure with 3 horizontal lines and 2 vertical lines forming a grid?',
        options: ['3', '6', '9', '12'],
        correct: 1,
        explanation: 'In a 2×3 grid, the number of rectangles = C(3,2) × C(2,2) = 3 × 1 = 3... actually 6 rectangles total.'
      },
      {
        text: 'How many triangles are in a triangle divided into 2 smaller triangles by one line from top to base?',
        options: ['2', '3', '4', '1'],
        correct: 1,
        explanation: '2 small triangles + 1 big triangle = 3 triangles total.'
      },
      {
        text: 'How many rectangles can you find in a rectangle divided into 2 equal parts?',
        options: ['2', '3', '4', '1'],
        correct: 1,
        explanation: '2 small rectangles + 1 big rectangle = 3 rectangles total.'
      },
      {
        text: 'A square is divided into 4 equal smaller squares. How many total squares are there?',
        options: ['4', '5', '6', '8'],
        correct: 1,
        explanation: '4 small squares + 1 big square = 5 squares total.'
      },
      {
        text: 'How many line segments are needed to draw a triangle?',
        options: ['2', '3', '4', '5'],
        correct: 1,
        explanation: 'A triangle has 3 sides, so 3 line segments are needed.'
      },
      {
        text: 'A rectangle is divided into 3 equal vertical strips. How many rectangles are there in total?',
        options: ['3', '4', '5', '6'],
        correct: 3,
        explanation: '3 single strips + 2 double strips + 1 whole rectangle = 6 rectangles.'
      },
      {
        text: 'Which shape can you always find inside a rectangle?',
        options: ['Circle', 'Triangle', 'Pentagon', 'Hexagon'],
        correct: 1,
        explanation: 'You can always draw a triangle inside a rectangle using a diagonal.'
      },
      {
        text: 'How many triangles are in a star shape (5-pointed star)?',
        options: ['5', '8', '10', '12'],
        correct: 2,
        explanation: 'A 5-pointed star contains 10 triangles (5 outer + 5 inner overlapping).'
      },
      {
        text: 'A line divides a square diagonally. How many triangles are formed?',
        options: ['1', '2', '3', '4'],
        correct: 1,
        explanation: 'One diagonal line divides a square into exactly 2 triangles.'
      },
      {
        text: 'How many squares are in a 3×3 grid?',
        options: ['9', '10', '13', '14'],
        correct: 3,
        explanation: '9 small (1×1) + 4 medium (2×2) + 1 large (3×3) = 14 squares.'
      },
      {
        text: 'Both diagonals of a square create how many triangles?',
        options: ['2', '3', '4', '6'],
        correct: 2,
        explanation: 'Two diagonals divide a square into 4 equal triangles.'
      },
      {
        text: 'A triangle with all 3 medians drawn has how many smaller triangles?',
        options: ['3', '4', '6', '9'],
        correct: 2,
        explanation: 'Three medians of a triangle divide it into 6 smaller triangles.'
      },
      {
        text: 'How many rectangles are in the letter "H"?',
        options: ['1', '2', '3', '5'],
        correct: 2,
        explanation: 'The letter H has 3 rectangles: 2 vertical bars and 1 horizontal bar.'
      },
      {
        text: 'A circle inside a square — which shape has more area?',
        options: ['Circle', 'Square', 'Both equal', 'Cannot tell'],
        correct: 1,
        explanation: 'The square has more area because the circle fits inside it with gaps at corners.'
      }
    ],

    'Direction Sense': [
      {
        text: 'Ravi walks 5 steps North, then 5 steps South. Where is he now?',
        options: ['5 steps North', '5 steps South', 'Back at the start', '10 steps away'],
        correct: 2,
        explanation: 'He walked 5 steps North and then 5 steps back South, so he is back at the starting point.'
      },
      {
        text: 'If you face North and turn right, which direction are you facing?',
        options: ['South', 'East', 'West', 'North'],
        correct: 1,
        explanation: 'Turning right from North means you face East.'
      },
      {
        text: 'Priya walks 3 km East, then 4 km North. How far is she from the start?',
        options: ['7 km', '5 km', '1 km', '12 km'],
        correct: 1,
        explanation: 'Using the Pythagorean theorem: √(3² + 4²) = √(9+16) = √25 = 5 km.'
      },
      {
        text: 'If you face South and turn left, which direction are you facing?',
        options: ['North', 'East', 'West', 'South'],
        correct: 1,
        explanation: 'Turning left from South means you face East.'
      },
      {
        text: 'Amit walks 10 steps East, then 10 steps West. In which direction is he from the start?',
        options: ['East', 'West', 'He is at the start', 'North'],
        correct: 2,
        explanation: 'He walked 10 steps East and then 10 steps back West, so he is back at the starting point.'
      },
      {
        text: 'If you face East and turn left, which direction do you face?',
        options: ['West', 'North', 'South', 'East'],
        correct: 1,
        explanation: 'Turning left from East means you face North.'
      },
      {
        text: 'Sita walks 4 km North, then 3 km East. How far is she from start?',
        options: ['7 km', '5 km', '1 km', '12 km'],
        correct: 1,
        explanation: 'Using Pythagorean theorem: √(4² + 3²) = √(16+9) = √25 = 5 km.'
      },
      {
        text: 'If you face West and turn right, which direction do you face?',
        options: ['East', 'North', 'South', 'West'],
        correct: 1,
        explanation: 'Turning right from West means you face North.'
      },
      {
        text: 'Ram walks 6 steps South, then 6 steps North. Where is he?',
        options: ['6 steps South', '12 steps away', 'Back at start', '6 steps North'],
        correct: 2,
        explanation: 'He walked 6 steps South then 6 steps back North — he is at the starting point.'
      },
      {
        text: 'The sun rises in which direction?',
        options: ['West', 'North', 'East', 'South'],
        correct: 2,
        explanation: 'The sun always rises in the East and sets in the West.'
      },
      {
        text: 'If you face South and turn right twice, which direction do you face?',
        options: ['North', 'South', 'East', 'West'],
        correct: 0,
        explanation: 'From South, turn right = West. Turn right again = North.'
      },
      {
        text: 'Meera walks 5 km East, then turns left and walks 5 km. Which direction is she from start?',
        options: ['North-East', 'South-East', 'North-West', 'South-West'],
        correct: 0,
        explanation: 'She went East then turned left (North). So she is North-East from start.'
      },
      {
        text: 'If North is behind you, which direction are you facing?',
        options: ['North', 'South', 'East', 'West'],
        correct: 1,
        explanation: 'If North is behind you, you are facing South (opposite direction).'
      },
      {
        text: 'Arun faces North. He turns clockwise 90°. Which direction does he face?',
        options: ['West', 'East', 'South', 'North'],
        correct: 1,
        explanation: 'Clockwise 90° from North = East.'
      },
      {
        text: 'If you make a complete turn (360°), which direction do you face?',
        options: ['Opposite direction', 'Same direction as before', 'Right side', 'Left side'],
        correct: 1,
        explanation: 'A 360° turn brings you back to the same direction you started facing.'
      },
      {
        text: 'Priya faces East. She turns left, then left again. Which direction does she face?',
        options: ['East', 'West', 'North', 'South'],
        correct: 1,
        explanation: 'From East, turn left = North. Turn left again = West.'
      },
      {
        text: 'Which direction is opposite to North-East?',
        options: ['North-West', 'South-East', 'South-West', 'East'],
        correct: 2,
        explanation: 'The opposite of North-East is South-West.'
      },
      {
        text: 'A boy walks 3 km West, then 4 km South. In which direction is he from start?',
        options: ['North-West', 'South-West', 'South-East', 'North-East'],
        correct: 1,
        explanation: 'He went West and then South, so he is South-West from the starting point.'
      },
      {
        text: 'If you turn 180° from facing North, which direction do you face?',
        options: ['East', 'West', 'South', 'North'],
        correct: 2,
        explanation: '180° is a half turn. The opposite of North is South.'
      }
    ]

  }, // end Reasoning

  // ─────────────────────────────────────────────
  // MATH  (7 topics)
  // ─────────────────────────────────────────────
  Math: {

    'Numbers': [
      {
        text: 'What is the place value of 7 in the number 3,742?',
        options: ['7', '70', '700', '7000'],
        correct: 2,
        explanation: 'In 3,742 the digit 7 is in the hundreds place, so its place value is 700.'
      },
      {
        text: 'Which of these numbers is the greatest: 4,321 or 3,421 or 4,231 or 4,312?',
        options: ['3,421', '4,231', '4,312', '4,321'],
        correct: 3,
        explanation: 'Comparing thousands first: 4,321 has the highest value among all four numbers.'
      },
      {
        text: 'What is 5,000 + 300 + 40 + 6 in standard form?',
        options: ['5,346', '5,436', '5,364', '5,463'],
        correct: 0,
        explanation: '5,000 + 300 + 40 + 6 = 5,346.'
      },
      {
        text: 'Which number is between 4,500 and 4,600?',
        options: ['4,499', '4,601', '4,550', '4,700'],
        correct: 2,
        explanation: '4,550 is between 4,500 and 4,600.'
      },
      {
        text: 'What is the predecessor of 10,000?',
        options: ['10,001', '9,999', '9,000', '10,010'],
        correct: 1,
        explanation: 'The predecessor is the number just before. 10,000 − 1 = 9,999.'
      }
    ],

    'Addition & Subtraction': [
      {
        text: 'What is 2,345 + 1,678?',
        options: ['3,923', '4,023', '4,013', '3,913'],
        correct: 1,
        explanation: '2,345 + 1,678 = 4,023.'
      },
      {
        text: 'What is 5,000 − 2,347?',
        options: ['2,653', '2,743', '2,543', '2,663'],
        correct: 0,
        explanation: '5,000 − 2,347 = 2,653.'
      },
      {
        text: 'A shop had 1,250 apples. It sold 875. How many apples are left?',
        options: ['375', '475', '385', '365'],
        correct: 0,
        explanation: '1,250 − 875 = 375 apples are left.'
      },
      {
        text: 'What is 999 + 1?',
        options: ['1,000', '998', '1,001', '990'],
        correct: 0,
        explanation: '999 + 1 = 1,000.'
      },
      {
        text: 'Riya had ₹3,500. She spent ₹1,250. How much money does she have left?',
        options: ['₹2,150', '₹2,250', '₹2,350', '₹2,050'],
        correct: 1,
        explanation: '₹3,500 − ₹1,250 = ₹2,250.'
      }
    ],

    'Multiplication': [
      {
        text: 'What is 24 × 5?',
        options: ['100', '110', '120', '115'],
        correct: 2,
        explanation: '24 × 5 = 120.'
      },
      {
        text: 'What is 36 × 4?',
        options: ['124', '134', '144', '154'],
        correct: 2,
        explanation: '36 × 4 = 144.'
      },
      {
        text: 'A box has 12 chocolates. How many chocolates are in 8 boxes?',
        options: ['86', '96', '106', '76'],
        correct: 1,
        explanation: '12 × 8 = 96 chocolates.'
      },
      {
        text: 'What is 50 × 20?',
        options: ['100', '500', '1,000', '2,000'],
        correct: 2,
        explanation: '50 × 20 = 1,000.'
      },
      {
        text: 'What is 125 × 3?',
        options: ['365', '375', '385', '355'],
        correct: 1,
        explanation: '125 × 3 = 375.'
      }
    ],

    'Fractions': [
      {
        text: 'Which fraction is equal to one half?',
        options: ['1/3', '2/4', '3/5', '2/3'],
        correct: 1,
        explanation: '2/4 simplifies to 1/2 because both numerator and denominator are divided by 2.'
      },
      {
        text: 'What is 1/4 + 1/4?',
        options: ['1/8', '2/8', '1/2', '2/4'],
        correct: 2,
        explanation: '1/4 + 1/4 = 2/4 = 1/2.'
      },
      {
        text: 'Which fraction is greater: 3/4 or 1/2?',
        options: ['1/2', '3/4', 'They are equal', 'Cannot say'],
        correct: 1,
        explanation: '3/4 = 0.75 and 1/2 = 0.5, so 3/4 is greater.'
      },
      {
        text: 'A pizza is cut into 8 equal slices. Rohan ate 3 slices. What fraction did he eat?',
        options: ['3/5', '5/8', '3/8', '1/3'],
        correct: 2,
        explanation: 'Rohan ate 3 out of 8 slices, which is 3/8 of the pizza.'
      },
      {
        text: 'What is 3/5 of 20?',
        options: ['10', '12', '15', '8'],
        correct: 1,
        explanation: '3/5 × 20 = (3 × 20) ÷ 5 = 60 ÷ 5 = 12.'
      }
    ],

    'Geometry': [
      {
        text: 'How many sides does a hexagon have?',
        options: ['5', '6', '7', '8'],
        correct: 1,
        explanation: 'A hexagon has 6 sides. "Hex" means six in Greek.'
      },
      {
        text: 'What is the perimeter of a square with side 5 cm?',
        options: ['10 cm', '15 cm', '20 cm', '25 cm'],
        correct: 2,
        explanation: 'Perimeter of a square = 4 × side = 4 × 5 = 20 cm.'
      },
      {
        text: 'What is the area of a rectangle with length 6 cm and width 4 cm?',
        options: ['10 sq cm', '20 sq cm', '24 sq cm', '28 sq cm'],
        correct: 2,
        explanation: 'Area of rectangle = length × width = 6 × 4 = 24 sq cm.'
      },
      {
        text: 'How many right angles does a rectangle have?',
        options: ['2', '3', '4', '1'],
        correct: 2,
        explanation: 'A rectangle has 4 corners and each corner is a right angle (90°).'
      },
      {
        text: 'A triangle has angles of 60°, 60°, and ___?',
        options: ['60°', '90°', '45°', '30°'],
        correct: 0,
        explanation: 'The sum of angles in a triangle is 180°. 60° + 60° + 60° = 180°.'
      }
    ],

    'Measurement': [
      {
        text: 'How many centimetres are in 1 metre?',
        options: ['10', '100', '1,000', '10,000'],
        correct: 1,
        explanation: '1 metre = 100 centimetres.'
      },
      {
        text: 'How many grams are in 1 kilogram?',
        options: ['10', '100', '1,000', '10,000'],
        correct: 2,
        explanation: '1 kilogram = 1,000 grams.'
      },
      {
        text: 'A ribbon is 3 m 50 cm long. What is its length in centimetres?',
        options: ['305 cm', '350 cm', '300 cm', '353 cm'],
        correct: 1,
        explanation: '3 m = 300 cm. 300 + 50 = 350 cm.'
      },
      {
        text: 'How many millilitres are in 1 litre?',
        options: ['10', '100', '1,000', '500'],
        correct: 2,
        explanation: '1 litre = 1,000 millilitres.'
      },
      {
        text: 'A bag weighs 2 kg 500 g. What is its weight in grams?',
        options: ['2,050 g', '2,500 g', '2,005 g', '25,000 g'],
        correct: 1,
        explanation: '2 kg = 2,000 g. 2,000 + 500 = 2,500 g.'
      }
    ],

    'Time & Money': [
      {
        text: 'How many minutes are in 2 hours?',
        options: ['60', '100', '120', '180'],
        correct: 2,
        explanation: '1 hour = 60 minutes. 2 hours = 2 × 60 = 120 minutes.'
      },
      {
        text: 'A movie starts at 3:30 PM and lasts 2 hours. When does it end?',
        options: ['5:00 PM', '5:30 PM', '6:00 PM', '4:30 PM'],
        correct: 1,
        explanation: '3:30 PM + 2 hours = 5:30 PM.'
      },
      {
        text: 'Anu has ₹50. She buys a pen for ₹12 and a notebook for ₹25. How much money is left?',
        options: ['₹13', '₹15', '₹17', '₹23'],
        correct: 0,
        explanation: '₹12 + ₹25 = ₹37 spent. ₹50 − ₹37 = ₹13 left.'
      },
      {
        text: 'How many seconds are in 1 minute?',
        options: ['30', '60', '100', '120'],
        correct: 1,
        explanation: '1 minute = 60 seconds.'
      },
      {
        text: 'If 1 dozen eggs costs ₹60, how much do 2 dozen eggs cost?',
        options: ['₹100', '₹110', '₹120', '₹130'],
        correct: 2,
        explanation: '1 dozen = ₹60. 2 dozen = 2 × ₹60 = ₹120.'
      }
    ]

  }, // end Math

  // ─────────────────────────────────────────────
  // SCIENCE  (7 topics)
  // ─────────────────────────────────────────────
  Science: {

    'Plants': [
      {
        text: 'Which part of the plant makes food using sunlight?',
        options: ['Root', 'Stem', 'Leaf', 'Flower'],
        correct: 2,
        explanation: 'Leaves make food for the plant through a process called photosynthesis using sunlight.'
      },
      {
        text: 'What do roots do for a plant?',
        options: ['Make food', 'Absorb water and minerals from soil', 'Produce seeds', 'Attract insects'],
        correct: 1,
        explanation: 'Roots absorb water and minerals from the soil and anchor the plant.'
      },
      {
        text: 'Which gas do plants release during photosynthesis?',
        options: ['Carbon dioxide', 'Nitrogen', 'Oxygen', 'Hydrogen'],
        correct: 2,
        explanation: 'During photosynthesis, plants take in carbon dioxide and release oxygen.'
      },
      {
        text: 'What is the process by which plants make their own food called?',
        options: ['Respiration', 'Photosynthesis', 'Digestion', 'Germination'],
        correct: 1,
        explanation: 'Photosynthesis is the process by which plants use sunlight, water, and carbon dioxide to make food.'
      },
      {
        text: 'Which part of the plant carries water from roots to leaves?',
        options: ['Flower', 'Fruit', 'Stem', 'Seed'],
        correct: 2,
        explanation: 'The stem carries water and nutrients from the roots up to the leaves.'
      }
    ],

    'Animals': [
      {
        text: 'Which animal is a mammal?',
        options: ['Frog', 'Snake', 'Whale', 'Eagle'],
        correct: 2,
        explanation: 'Whales are mammals. They breathe air, give birth to live young, and feed them milk.'
      },
      {
        text: 'What do herbivores eat?',
        options: ['Only meat', 'Only plants', 'Both plants and meat', 'Only insects'],
        correct: 1,
        explanation: 'Herbivores eat only plants. Examples include cows, rabbits, and deer.'
      },
      {
        text: 'Which animal lays eggs?',
        options: ['Dog', 'Cat', 'Hen', 'Cow'],
        correct: 2,
        explanation: 'Hens (chickens) lay eggs. They are birds, and most birds lay eggs.'
      },
      {
        text: 'What is the young one of a butterfly called?',
        options: ['Larva', 'Pupa', 'Caterpillar', 'Nymph'],
        correct: 2,
        explanation: 'The young one of a butterfly is called a caterpillar (larva stage). It later becomes a pupa and then a butterfly.'
      },
      {
        text: 'Which of these animals lives both on land and in water?',
        options: ['Lion', 'Frog', 'Eagle', 'Camel'],
        correct: 1,
        explanation: 'Frogs are amphibians. They can live both on land and in water.'
      }
    ],

    'Human Body': [
      {
        text: 'How many bones are in the adult human body?',
        options: ['106', '206', '306', '406'],
        correct: 1,
        explanation: 'The adult human body has 206 bones.'
      },
      {
        text: 'Which organ pumps blood throughout the body?',
        options: ['Lungs', 'Brain', 'Heart', 'Liver'],
        correct: 2,
        explanation: 'The heart pumps blood to all parts of the body through blood vessels.'
      },
      {
        text: 'Which organ is used for breathing?',
        options: ['Heart', 'Stomach', 'Lungs', 'Kidneys'],
        correct: 2,
        explanation: 'We use our lungs to breathe. They take in oxygen and release carbon dioxide.'
      },
      {
        text: 'What is the largest organ of the human body?',
        options: ['Heart', 'Liver', 'Skin', 'Brain'],
        correct: 2,
        explanation: 'The skin is the largest organ of the human body. It covers and protects the entire body.'
      },
      {
        text: 'Which part of the body controls all our actions and thoughts?',
        options: ['Heart', 'Lungs', 'Stomach', 'Brain'],
        correct: 3,
        explanation: 'The brain controls all our actions, thoughts, and feelings. It is the control centre of the body.'
      }
    ],

    'Food & Nutrition': [
      {
        text: 'Which nutrient gives us energy to work and play?',
        options: ['Vitamins', 'Minerals', 'Carbohydrates', 'Water'],
        correct: 2,
        explanation: 'Carbohydrates are the main source of energy for our body. Rice, bread, and potatoes are rich in carbohydrates.'
      },
      {
        text: 'Which food is a good source of protein?',
        options: ['Rice', 'Eggs', 'Sugar', 'Oil'],
        correct: 1,
        explanation: 'Eggs are rich in protein. Protein helps build and repair our body muscles.'
      },
      {
        text: 'Which vitamin do we get from sunlight?',
        options: ['Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D'],
        correct: 3,
        explanation: 'Our skin makes Vitamin D when exposed to sunlight. It helps keep our bones strong.'
      },
      {
        text: 'Which food group do milk, cheese, and yogurt belong to?',
        options: ['Grains', 'Fruits', 'Dairy', 'Vegetables'],
        correct: 2,
        explanation: 'Milk, cheese, and yogurt are dairy products. They are rich in calcium which strengthens bones and teeth.'
      },
      {
        text: 'What is a balanced diet?',
        options: [
          'Eating only fruits and vegetables',
          'Eating food from all food groups in the right amounts',
          'Eating only proteins',
          'Eating as much as you want'
        ],
        correct: 1,
        explanation: 'A balanced diet includes the right amounts of carbohydrates, proteins, fats, vitamins, minerals, and water.'
      }
    ],

    'Matter': [
      {
        text: 'Which of these is an example of a solid?',
        options: ['Water', 'Air', 'Wood', 'Milk'],
        correct: 2,
        explanation: 'Wood is a solid. Solids have a definite shape and volume.'
      },
      {
        text: 'What happens to water when it is heated to 100°C?',
        options: ['It freezes', 'It evaporates into steam', 'It becomes ice', 'It turns into milk'],
        correct: 1,
        explanation: 'Water boils and turns into steam (water vapour) at 100°C. This is called evaporation or boiling.'
      },
      {
        text: 'Which state of matter has no fixed shape but has a fixed volume?',
        options: ['Solid', 'Liquid', 'Gas', 'Plasma'],
        correct: 1,
        explanation: 'Liquids have no fixed shape (they take the shape of their container) but have a fixed volume.'
      },
      {
        text: 'What is the process of water turning into ice called?',
        options: ['Melting', 'Evaporation', 'Freezing', 'Condensation'],
        correct: 2,
        explanation: 'When water cools down to 0°C, it turns into ice. This process is called freezing.'
      },
      {
        text: 'Which of these is a gas?',
        options: ['Salt', 'Iron', 'Oxygen', 'Honey'],
        correct: 2,
        explanation: 'Oxygen is a gas. We breathe oxygen to stay alive.'
      }
    ],

    'Force & Motion': [
      {
        text: 'What is a push or pull called?',
        options: ['Energy', 'Force', 'Motion', 'Speed'],
        correct: 1,
        explanation: 'A push or pull applied on an object is called a force.'
      },
      {
        text: 'Which force pulls objects towards the Earth?',
        options: ['Magnetic force', 'Friction', 'Gravity', 'Electric force'],
        correct: 2,
        explanation: 'Gravity is the force that pulls all objects towards the Earth.'
      },
      {
        text: 'What does friction do to a moving object?',
        options: ['Speeds it up', 'Slows it down', 'Has no effect', 'Makes it float'],
        correct: 1,
        explanation: 'Friction is a force that opposes motion. It slows down moving objects.'
      },
      {
        text: 'A ball rolling on the floor eventually stops. What force causes this?',
        options: ['Gravity', 'Magnetic force', 'Friction', 'Electric force'],
        correct: 2,
        explanation: 'Friction between the ball and the floor surface slows the ball down and eventually stops it.'
      },
      {
        text: 'Which simple machine is used to lift heavy objects easily?',
        options: ['Wheel', 'Pulley', 'Wedge', 'Screw'],
        correct: 1,
        explanation: 'A pulley is a simple machine that makes it easier to lift heavy objects by changing the direction of force.'
      }
    ],

    'Light & Shadow': [
      {
        text: 'What is needed to form a shadow?',
        options: ['Only an object', 'A light source and an opaque object', 'Only a light source', 'Water and light'],
        correct: 1,
        explanation: 'A shadow is formed when an opaque object blocks a light source, creating a dark area behind it.'
      },
      {
        text: 'Which of these objects allows light to pass through completely?',
        options: ['Wood', 'Stone', 'Clear glass', 'Metal'],
        correct: 2,
        explanation: 'Clear glass is transparent — it allows light to pass through completely.'
      },
      {
        text: 'When is your shadow the shortest?',
        options: ['Early morning', 'At noon', 'In the evening', 'At night'],
        correct: 1,
        explanation: 'At noon, the sun is directly overhead, so shadows are the shortest.'
      },
      {
        text: 'What are the seven colours of the rainbow?',
        options: [
          'Red, Orange, Yellow, Green, Blue, Indigo, Violet',
          'Red, Pink, Yellow, Green, Blue, Purple, White',
          'Red, Orange, Yellow, Green, Blue, Purple, Black',
          'Red, Orange, Green, Blue, Indigo, Violet, White'
        ],
        correct: 0,
        explanation: 'The seven colours of the rainbow are Red, Orange, Yellow, Green, Blue, Indigo, and Violet (ROYGBIV).'
      },
      {
        text: 'Light travels in which path?',
        options: ['Curved lines', 'Zigzag lines', 'Straight lines', 'Circular paths'],
        correct: 2,
        explanation: 'Light always travels in straight lines. This is why shadows have sharp edges.'
      }
    ]

  }, // end Science

  // ─────────────────────────────────────────────
  // ENGLISH  (7 topics)
  // ─────────────────────────────────────────────
  English: {

    'Nouns & Pronouns': [
      {
        text: 'Which word is a proper noun?',
        options: ['city', 'river', 'Delhi', 'mountain'],
        correct: 2,
        explanation: 'Delhi is a proper noun because it is the name of a specific city. Proper nouns always start with a capital letter.'
      },
      {
        text: 'Which word is a pronoun?',
        options: ['book', 'she', 'run', 'happy'],
        correct: 1,
        explanation: '"She" is a pronoun. Pronouns replace nouns in a sentence (e.g., "She is my friend" instead of "Priya is my friend").'
      },
      {
        text: 'What is the plural of "child"?',
        options: ['childs', 'childes', 'children', 'childer'],
        correct: 2,
        explanation: 'The plural of "child" is "children". It is an irregular plural form.'
      },
      {
        text: 'Which sentence uses a collective noun?',
        options: [
          'The dog is barking.',
          'A flock of birds flew over.',
          'She is reading a book.',
          'He runs fast.'
        ],
        correct: 1,
        explanation: '"Flock" is a collective noun. It refers to a group of birds together.'
      },
      {
        text: 'Replace the underlined noun with a pronoun: "Rahul is my best friend."',
        options: ['She', 'They', 'He', 'It'],
        correct: 2,
        explanation: 'Rahul is a boy, so we replace his name with the pronoun "He".'
      }
    ],

    'Verbs & Tenses': [
      {
        text: 'Which word is a verb in the sentence: "The cat sleeps on the mat."?',
        options: ['cat', 'sleeps', 'mat', 'the'],
        correct: 1,
        explanation: '"Sleeps" is the verb. It tells us what the cat is doing.'
      },
      {
        text: 'Which sentence is in the past tense?',
        options: [
          'She plays in the garden.',
          'She will play in the garden.',
          'She played in the garden.',
          'She is playing in the garden.'
        ],
        correct: 2,
        explanation: '"She played in the garden" is in the past tense. The verb "played" shows an action that already happened.'
      },
      {
        text: 'What is the past tense of "go"?',
        options: ['goed', 'gone', 'went', 'goes'],
        correct: 2,
        explanation: 'The past tense of "go" is "went". It is an irregular verb.'
      },
      {
        text: 'Which sentence is in the future tense?',
        options: [
          'I eat breakfast every day.',
          'I ate breakfast this morning.',
          'I will eat breakfast tomorrow.',
          'I am eating breakfast now.'
        ],
        correct: 2,
        explanation: '"I will eat breakfast tomorrow" is in the future tense. "Will" shows that the action has not happened yet.'
      },
      {
        text: 'Fill in the blank: "She ___ to school every day."',
        options: ['go', 'goes', 'went', 'going'],
        correct: 1,
        explanation: 'With "she" (third person singular), we add "s" to the verb. So "goes" is correct.'
      }
    ],

    'Adjectives & Adverbs': [
      {
        text: 'Which word is an adjective in: "The big elephant walked slowly."?',
        options: ['elephant', 'walked', 'big', 'slowly'],
        correct: 2,
        explanation: '"Big" is an adjective. It describes the noun "elephant".'
      },
      {
        text: 'Which word is an adverb in: "The big elephant walked slowly."?',
        options: ['elephant', 'walked', 'big', 'slowly'],
        correct: 3,
        explanation: '"Slowly" is an adverb. It describes how the elephant walked.'
      },
      {
        text: 'What is the comparative form of "tall"?',
        options: ['tallest', 'taller', 'more tall', 'most tall'],
        correct: 1,
        explanation: 'The comparative form of "tall" is "taller". We use it to compare two things.'
      },
      {
        text: 'Which sentence uses an adjective correctly?',
        options: [
          'She runs quick.',
          'The red rose smells sweet.',
          'He speaks loud.',
          'They play happy.'
        ],
        correct: 1,
        explanation: '"Red" is an adjective describing the noun "rose". The sentence is grammatically correct.'
      },
      {
        text: 'What is the superlative form of "good"?',
        options: ['gooder', 'better', 'goodest', 'best'],
        correct: 3,
        explanation: '"Best" is the superlative form of "good". It is an irregular adjective (good → better → best).'
      }
    ],

    'Prepositions': [
      {
        text: 'Choose the correct preposition: "The book is ___ the table."',
        options: ['on', 'in', 'at', 'by'],
        correct: 0,
        explanation: '"On" is used when something is resting on a surface. The book is on the table.'
      },
      {
        text: 'Choose the correct preposition: "She lives ___ Mumbai."',
        options: ['on', 'in', 'at', 'by'],
        correct: 1,
        explanation: '"In" is used with cities and countries. She lives in Mumbai.'
      },
      {
        text: 'Choose the correct preposition: "The cat is hiding ___ the bed."',
        options: ['on', 'above', 'under', 'over'],
        correct: 2,
        explanation: '"Under" means below something. The cat is hiding under the bed.'
      },
      {
        text: 'Choose the correct preposition: "We will meet ___ 5 o\'clock."',
        options: ['in', 'on', 'at', 'by'],
        correct: 2,
        explanation: '"At" is used with specific times. We will meet at 5 o\'clock.'
      },
      {
        text: 'Choose the correct preposition: "The bird flew ___ the tree."',
        options: ['under', 'below', 'over', 'in'],
        correct: 2,
        explanation: '"Over" means above and across. The bird flew over the tree.'
      }
    ],

    'Comprehension': [
      {
        text: 'Read: "Meera loves to read books. She visits the library every Saturday." What does Meera do every Saturday?',
        options: ['She plays cricket.', 'She visits the library.', 'She watches TV.', 'She goes to school.'],
        correct: 1,
        explanation: 'The passage says "She visits the library every Saturday."'
      },
      {
        text: 'Read: "The sun rises in the east and sets in the west." Where does the sun set?',
        options: ['North', 'South', 'East', 'West'],
        correct: 3,
        explanation: 'The passage clearly states "the sun sets in the west".'
      },
      {
        text: 'Read: "Raju has three pets: a dog, a cat, and a parrot." How many pets does Raju have?',
        options: ['Two', 'Three', 'Four', 'Five'],
        correct: 1,
        explanation: 'The passage says Raju has three pets: a dog, a cat, and a parrot.'
      },
      {
        text: 'Read: "It was a cold winter morning. Priya wore a warm coat and gloves." Why did Priya wear a coat?',
        options: ['It was raining.', 'It was hot.', 'It was cold.', 'She was going to a party.'],
        correct: 2,
        explanation: 'The passage says it was a cold winter morning, so Priya wore a warm coat.'
      },
      {
        text: 'Read: "The farmer woke up early and went to his field. He watered the plants and removed the weeds." What did the farmer do first?',
        options: ['Removed weeds', 'Watered plants', 'Woke up early', 'Went to market'],
        correct: 2,
        explanation: 'The passage says the farmer "woke up early" first, then went to his field.'
      }
    ],

    'Spelling': [
      {
        text: 'Which of these is the correct spelling of the word that means a close companion?',
        options: ['freind', 'frend', 'friend', 'freand'],
        correct: 2,
        explanation: 'The correct spelling is "friend". Remember: "i before e except after c".'
      },
      {
        text: 'Which of these is the correct spelling of the word that means very pretty?',
        options: ['beutiful', 'beautiful', 'beautifull', 'beutifull'],
        correct: 1,
        explanation: 'The correct spelling is "beautiful". It has the word "beauty" inside it.'
      },
      {
        text: 'Which of these is the correct spelling of the word that means to get something?',
        options: ['recieve', 'recive', 'receive', 'receve'],
        correct: 2,
        explanation: 'The correct spelling is "receive". After "c", the rule is "e before i".'
      },
      {
        text: 'Which of these is the correct spelling of the word that means the day after today?',
        options: ['tomorro', 'tomorow', 'tomorrow', 'tommorrow'],
        correct: 2,
        explanation: 'The correct spelling is "tomorrow". It has one "m" and two "r"s.'
      },
      {
        text: 'Which of these is the correct spelling of the word that gives a reason?',
        options: ['becuase', 'because', 'becouse', 'becaus'],
        correct: 1,
        explanation: 'The correct spelling is "because". You can remember it as "Big Elephants Can Always Understand Small Elephants".'
      }
    ],

    'Vocabulary': [
      {
        text: 'What is the meaning of the word "enormous"?',
        options: ['Very small', 'Very fast', 'Very large', 'Very quiet'],
        correct: 2,
        explanation: '"Enormous" means very large or huge. For example: "The elephant is enormous."'
      },
      {
        text: 'Which word is the opposite (antonym) of "happy"?',
        options: ['Joyful', 'Glad', 'Sad', 'Cheerful'],
        correct: 2,
        explanation: '"Sad" is the antonym (opposite) of "happy".'
      },
      {
        text: 'Which word is a synonym (similar meaning) for "brave"?',
        options: ['Cowardly', 'Fearful', 'Courageous', 'Timid'],
        correct: 2,
        explanation: '"Courageous" is a synonym for "brave". Both words mean not afraid to face danger.'
      },
      {
        text: 'What does the word "transparent" mean?',
        options: ['Cannot be seen through', 'Can be seen through clearly', 'Very heavy', 'Very colourful'],
        correct: 1,
        explanation: '"Transparent" means you can see through it clearly. For example, clear glass is transparent.'
      },
      {
        text: 'Which word means "to move very quickly"?',
        options: ['Crawl', 'Stroll', 'Dash', 'Trudge'],
        correct: 2,
        explanation: '"Dash" means to move very quickly. For example: "She dashed to catch the bus."'
      }
    ]

  } // end English

}; // end QUESTION_BANK
