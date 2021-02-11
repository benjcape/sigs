import readline from "readline";
import chalk from "chalk";
import open from "open";

const WHITE_BALL = "⚪";
const BLACK_BALL = "⚫ ";

function askQuestion(query: string) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) =>
    rl.question(query, (ans) => {
      rl.close();
      resolve(ans);
    })
  );
}

const divider = () => {
  console.log("");
  console.log("----------");
  console.log();
};

const br = async () => {
  await askQuestion("Press Enter to continue");
  readline.cursorTo(process.stdout, 0);
};

const intro = async () => {
  divider();
  console.log(
    chalk.green(
      "As a pre-requisite to this project, please have some drink in hand, preferable one that will enhance your experience here."
    )
  );
  await askQuestion(
    "Are you prepared with your drink of choice? (Enter to continue) "
  );

  divider();
  //   const name = await askQuestion('What is your name? ');
  //   const nickname = await askQuestion('What is your nickname? ');
  //   const hometown = await askQuestion('Where are you from? ');
  //   const oneInterestingThing = await askQuestion(
  //     'Tell me one interesting thing about yourself. '
  //   );

  //   const mostFucked = await askQuestion('Which brother is the most fucked? ');

  const name = "ben";
  const nickname = "b";
  const hometown = "seattle";
  const oneInterestingThing = "blah";

  const body = `My name is ${name}, but please call me ${nickname}. I am a New Member of the one and only Chi Gamma Epsilon. I am from ${hometown}, and one interesting thing about me is that ${oneInterestingThing}.`;

  console.log(
    "A link will appear below, copy that link into your browser, and send the email. "
  );
  console.log(
    chalk.blue(`mailto:benjcape@gmail.com?subject=${name}'s Sig&body=${body}`)
  );

  await askQuestion("Once you've send the email, press enter.");

  console.log(
    "Now comes the interesting part, where you get to decide where you go, kind of like one of those do it yourself books you used to read in Middle School."
  );
  await br();
  console.log(
    chalk.green(
      "I have chose 1010 different sigs for you to complete. Don't worry, it's not as much as you think."
    )
  );
  await br();
  await confirmNumber();

  console.log(
    chalk.yellow(
      `Congratulations, you have completed your first Sig, and have likely been awarded ${WHITE_BALL}x5.`
    )
  );
};

const confirmNumber = async () => {
  const hexa = await askQuestion(
    chalk.red(
      "Sorry, I don't actually remember how many sigs I told you I had, could you remind me in Hexadecimal format (no leading 0s): "
    )
  );

  if (hexa !== "a") {
    console.log(`Sorry, that's not right, ${BLACK_BALL}x20, try again.`);
    await confirmNumber();
  } else {
    console.log(
      "Congrats! You finally got it.... Took you long enough, you're almost as slow as Robello with his conversions."
    );
  }
};

const recipe = async () => {
  console.log(
    `Alright, that's enough with the shenanigans. But wait! There's more. Did you know I'm Jewish? If not ${BLACK_BALL}x1000 - so fucked`
  );
  await br();
  console.log(
    "One thing that's very important to the Jewish religion is food and alcohol. EVERY Jewish holiday (except for Yom Kippur) is remembered by millions of Jews by their mothers home cooked meals."
  );
  await br();
  console.log(
    "So, to honor my mother and her home cooked meals, Your next task is to find me a recipe, can be anything really. ONE restriction, it needs to be KOSHER. If you don't know what that means, figure it out."
  );
  await br();
  console.log(
    "If you send me a non-kosher recipe well let's just say.... so fucked"
  );
};

const myHouse = async () => {
  console.log(
    "As you all know, we are living in the midst of a global pandemic. But fuck that. I want to be close to friends, so I'm living around the Hanover area."
  );
  const onCampus = await askQuestion(chalk.red("Are you on campus? (y/n) "));
  if (onCampus === "y") {
    console.log(
      `Your next task is to figure out where I live, and take a photo of my house. While you're here, extra ${WHITE_BALL}s if you clear my driveway, and bring the mail to the front-door, which is actually behind the house.`
    );
  }
  if (onCampus === "n") {
    console.log(
      "First of all, that sucks b/c this SIG was meant for people who are on campus."
    );
    await br();
    console.log(
      "BUT because we are an inclusive space, there will always be something for you to do. Find a yellow house close to where you live, send me a photo of you and the house and make a guess as to how many of keystones could fit inside the house, send me your guess."
    );
  }
};

const tikunOlam = async () => {
  console.log(
    "Tikun Olam is one of the core values of Judaism, and also Chi Gam. Tikun Olam means repairing the world. It is the source of good deeds, volunteer work, and so much more."
  );
  await br();
  console.log(
    "For this Sig, do an act of Tikun Olam, and share it with me. Let's make the world a better place one step at a time."
  );
  await br();
  console.log(
    "Bonus points for each additional person you get to do this with you."
  );
};

const army1 = async () => {
  console.log(
    "For those who don't know, I served in the Israeli Military for almost two years."
  );
  await br();
  console.log(
    "During my service, I trained, patrolled, went on a few missions, but mostly exercised with my fellow soldiers."
  );
  await br();
  console.log(
    "This SIG, while it is meant to make you feel some of a soldiers pain, is also meant to help you get closer with your fellow brothers."
  );
  await br();
  console.log(
    "For this one, find 3 other brothers, and run 3km with them. The catch here, is you have to run the 3km together until you all run it in less than 12 min."
  );
  await br();
  console.log(`+${WHITE_BALL}x10 for each additional person who runs it.`);
  console.log(
    `+${WHITE_BALL}x50 for each additional minute you shed off the time`
  );
};

const army2 = async () => {
  console.log(
    "Another thing we had to do in the army was shoot guns. If you're on campus, then reach out to me, and maybe we can go shooting."
  );
  await br();
  console.log(
    "Even when we weren't shooting we were always on call with our gun, we were never allowed to be seen without it."
  );
  await br();
  console.log(
    "Guns are very dangerous, so please, if you are not well versed in the techniques of using a firearm do not do so."
  );
  console.log(
    "That being said, everyone should know HOW to protect themselves. So for this SIG, you need to pick a gun ( ideally a handgun ), and write a safety briefing for use of that gun."
  );
  console.log(
    "Send me the safety briefing, I will approve it, and then you will present to the rest of ChiGam so they can also be safe gun owners"
  );
};

const compSci = async () => {
  console.log(
    "A lot of the brothers are Computer Science Majors, some are Engineering modified with CS, and others do god knows what."
  );
  await br();
  console.log(
    "In all the years that Computer Science has existed though, and as much code as we've been taught, no one has every written a program that can do homework for you."
  );
  await br();
  console.log(
    "Wouldn't that be nice? More time to smoke, more time to chill with the boys, more time to get outside."
  );
  console.log("....");
  await br();
  console.log(
    "But wait, why would I need a program to do my homework, when a rat can do my homework?"
  );
  await br();
  console.log(
    "Lucky you, I'm not taking classes. Lucky me, the company I'm working at doesn't have an honor code as strict as Dartmouth's."
  );
  await br();
  console.log(
    "At my company we use something called Amazon Web Services for a big portion of our coding. There are over 175 different Amazon services and products bundled in AWS."
  );
  console.log(
    "For this sig, find one that interests you, and teach me about it."
  );
  console.log(
    chalk.red(
      `${BLACK_BALL}x20 if it's one I already know about, or you tell me something I already know.`
    )
  );
  console.log(
    chalk.green(`${WHITE_BALL}x20 if it's a service I didn't know existed`)
  );
  console.log(
    chalk.green(
      `${WHITE_BALL}x100 if you actually build something with that service and deploy it`
    )
  );
};

const scotch = async () => {
  console.log(
    "Currently I'm living with a friend of mine from Hillel. While I love him, he prefers Whisky over Scotch. So fucked."
  );
  await br();
  console.log(
    "For this sig, I want you to write him an email: matthew.S.Mann.21@dartmouth.edu and convince him that Scotch is better than Whisky."
  );
};

const skiing = async () => {
  console.log(
    "As you witnessed a few weeks ago at meetings, Ariel Attias is an incredible skier."
  );
  await br();
  console.log("For this Sig, Go skiing with Ari.");
};

const slack = async () => {
  console.log(
    "Since things have gone remote, a certain company, Slack, has gotten a ton of attention."
  );
  await br();
  console.log(
    "In fact, they were recently acquired by another company, Salesforce. So fucked."
  );
  await br();
  console.log(
    "A bunch of different orgs on campus, and throughout the world, use Slack for communication."
  );
  await br();
  console.log(
    chalk.green(
      "For this sig, make a slack workspace for the house. The name of the workspace should be CAYA, and add all of the brothers."
    )
  );
};

const knitting = async () => {
  console.log(
    "If you haven't followed my knitting instagram, then start this one off by doing that @knit_jew_a_sweater"
  );
  await br();
  console.log(
    "Now, while I am a good knitting, I'm not always the best boyfriend. I told my girlfriend that I would knit her a pair of socks, and I never finished the second sock."
  );
  console.log(
    "For this sig, knit/crochet something for my girlfriend. Her shoe size is a women's 6, her head is normal sized. Be creative. More points for creativity, and for complexity of the stick."
  );
};

const viewSigs = async () => {
  console.log(
    "Welcome to the grand finale. Here you will get to view all of the 1010 sigs that you can accomplish for me. Enjoy!"
  );

  divider();
  console.log(chalk.magenta("0. My House"));
  console.log(chalk.red("1. Tikun Olam"));
  console.log(chalk.yellow("2. Army #1"));
  console.log(chalk.green("3. Army #2"));
  console.log(chalk.blue("4. CS"));
  console.log(chalk.cyan("5. Food"));
  console.log(chalk.gray("6. Outdoors"));
  console.log(chalk.blueBright("7. Scotch"));
  console.log(chalk.white("8. Slack"));
  console.log(chalk.white("9. Knitting"));

  const sigNum = await askQuestion(
    "Which Sig would you like more info on? (0-9) "
  );
  divider();
  if (sigNum === "0") await myHouse();
  if (sigNum === "1") await tikunOlam();
  if (sigNum === "2") await army1();
  if (sigNum === "3") await army2();
  if (sigNum === "4") await compSci();
  if (sigNum === "5") await recipe();
  if (sigNum === "6") await skiing();
  if (sigNum === "7") await scotch();
  if (sigNum === "8") await slack();
  if (sigNum === "9") await knitting();
  divider();

  const seeAgain = await askQuestion(
    "Would you like to see the SIGs again? (y/n) "
  );
  if (seeAgain === "y") {
    await viewSigs();
  } else {
    console.log(
      "Thank you so much for partaking in optional festivities. Best of luck with everything, but either way, you know what you are."
    );
  }
};

const main = async () => {
  console.log(
    chalk.green(
      "Welcome to your interactive sig journey! My name is Ben Cape, and I will be your guide."
    )
  );
  await askQuestion("Are you ready to continue? (Enter to continue) ");

  const completedIntro = await askQuestion(
    "Have you completed your first Sig with me yet? (y/n) "
  );
  if (completedIntro === "n") await intro();

  await viewSigs();
};

main();
