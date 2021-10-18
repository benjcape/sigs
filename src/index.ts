import readline from "readline";
import chalk from "chalk";

const WHITE_BALL = "⚪";
const BLACK_BALL = "⚫ ";

function askQuestion(query: string) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise<string>((resolve) =>
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
  console.log("");
  await askQuestion(chalk.yellow("Press Enter to continue"));
  console.clear();
};

const intro = async () => {
  divider();
  console.log(
    chalk.green(
      "As a pre-requisite to this project, please have some drink in hand, preferable one that will enhance your experience here."
    )
  );
  await br();
  await askQuestion(
    "Are you prepared with your drink of choice? (Enter to continue) "
  );

  divider();

  console.log(
    "Before I get to the questions. Make sure you follow my instagrams: @benj_c, @knit_jew_a_sweater, you connect with me on LinkedIn, and you text me."
  );

  const name = await askQuestion("What is your name? ");
  const nickname = await askQuestion("What is your nickname? ");
  const hometown = await askQuestion("Where are you from? ");
  const oneInterestingThing = await askQuestion(
    "Tell me one interesting thing about yourself. "
  );

  const mostFucked = await askQuestion(
    "Which intern is least guaranteed a return offer? "
  );

  const lineBreak = "%0D%0A";
  const body = `Dear Mr. Cape,${lineBreak}${lineBreak}I am a New Member of the one and only Chi Gamma Epsilon. I am from ${hometown}, and one interesting thing about me is that ${oneInterestingThing}.${lineBreak}${lineBreak}Most Fucked Intern: ${mostFucked} ${lineBreak}${lineBreak} ${lineBreak}${lineBreak}- ${name} (${nickname})`;

  console.log(
    "A link (starting with mailto: ) will appear below ( in blue ), copy that link into your browser, and send the email. "
  );

  console.log(
    chalk.blue(`mailto:benjcape@gmail.com?subject=${name}'s Sig&body=${body}`)
  );

  await br();
  console.log(
    "Now comes the interesting part, where you get to decide where you go, kind of like one of those do it yourself books you used to read in Middle School."
  );
  await br();
  console.log(
    chalk.green(
      "I have chosen 1010 different sigs for you to complete. Don't worry, it's not as much as you think. - think binary"
    )
  );
  await confirmNumber();

  divider();

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

  if (hexa.toLowerCase() !== "a") {
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

const sleepyTime = async () => {
  console.log(
    "As you all know, we are all students and have a lot of work to do all the time. I NEVER get enough sleep per night. But you SHOULD."
  );
  await br();

  console.log(
    "Go for a nice spot on FFB, and take a nap. Bring a pillow, a blanket and an alarm clock. Make sure your alarm clock has the right music (Hannah Montana Theme song), and take a 30 minute nap!"
  );
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

const beerMile = async () => {
  console.log(
    "For those who don't know, I served in the Israeli Military for almost two years."
  );
  await br();
  console.log(
    "During my service, I trained, patrolled, went on a few missions, but mostly exercised with my fellow soldiers."
  );
  await br();
  console.log(
    "This SIG, while it is meant to make you feel some of a soldiers pain."
  );
  await br();
  console.log(
    "For this one, find 3 other brothers, and run a beer mile! Occom is just abound a mile, so place a beer every 400m around the loop."
  );
  await br();
  console.log(`+${WHITE_BALL}x10 for each additional person who runs it.`);
  console.log(`+${WHITE_BALL}x1000 if you beat Will Eaton's PR`);
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
  await br();
  console.log(
    "That being said, everyone should know HOW to protect themselves. So for this SIG, you need to pick a gun ( ideally a handgun ), and write a safety briefing for use of that gun."
  );
  await br();
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
  await br();
  console.log(
    "But wait, why would I need a program to do my homework, when a intern can do my homework?"
  );
  await br();
  console.log(
    "Lucky you, I'm not taking classes ( wasn't this past year at least ). Lucky me, the company I'm working at doesn't have an honor code as strict as Dartmouth's."
  );
  await br();
  console.log(
    "At my company we use something called Amazon Web Services for a big portion of our coding. There are over 175 different Amazon services and products bundled in AWS."
  );
  await br();
  console.log(
    "For this sig, find one that interests you, and teach me about it."
  );
  await br();
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

const army3 = async () => {
  console.log(
    "This is a joint sig for Syed Tanveer, my esteemed big and the most respected guy in the House."
  );
  await br();
  console.log(
    "Interview Syed and me about our experiences in the military. After you've done that, write a haiku about Syed's experience on the USS John Paul Jones and write a Limerick about my experience with the Paratroopers. Send it to the Groupme."
  );
};

const skiing = async () => {
  console.log(
    "As you witnessed a few weeks ago at meetings, Ariel Attias is an incredible skier."
  );
  await br();
  console.log("For this Sig, Go skiing with Ari.");
};

const slapsgiving = async () => {
  console.log(
    'Have you seen HIMYM? If not, go watch the episode titled "Slapsgiving". '
  );
  await br();
  console.log(
    "When I was a piggie I got the least sigs of anyone. But I did one sig that got me more whiteballs than I could have asked for."
  );
  await br();
  console.log(
    chalk.green(
      "For this sig, you gotta slap one of the NMEs. Real slap. no half-ass slaps. Full swing, 5-star mark across the cheek. Video evidence required."
    )
  );
};

const knitting = async () => {
  console.log(
    "If you haven't followed my knitting instagram, then start this one off by doing that @knit_jew_a_sweater"
  );
  await br();
  console.log(
    "Find me a cool pattern that you think I should knit, or knit me something cool."
  );
  await br();
  console.log(
    chalk.green(
      "Extra white balls if you come knit with me at one wheelock sometime. "
    )
  );
};

const recon = async () => {
  console.log(
    "Nick Shade comes around the house every so often, but I feel like I never see him elsewhere. I want full recon on Nick Shade."
  );
  await br();
  console.log(
    "Go find Nick Shade somewhere other than the house and get me photos of where he actually spends his time."
  );
};

const viewSigs = async () => {
  console.log(
    "Welcome to the grand finale. Here you will get to view all of the 1010 sigs that you can accomplish for me. Enjoy!"
  );

  divider();
  console.log(chalk.magenta("0. Sleepy Time"));
  console.log(chalk.red("1. Tikun Olam"));
  console.log(chalk.yellow("2. Army #1"));
  console.log(chalk.green("3. Army #2"));
  console.log(chalk.blue("4. AWS"));
  console.log(chalk.cyan("5. Food"));
  console.log(chalk.gray("6. Outdoors"));
  console.log(chalk.blueBright("7. Army #3"));
  console.log(chalk.white("8. Slapsgiving"));
  console.log(chalk.greenBright("9. Knitting"));
  console.log(chalk.greenBright("10. Recon"));

  const sigNum = await askQuestion(
    "Which Sig would you like more info on? (0-9) "
  );

  divider();
  console.clear();

  if (sigNum === "0") await sleepyTime();
  if (sigNum === "1") await tikunOlam();
  if (sigNum === "2") await beerMile();
  if (sigNum === "3") await army2();
  if (sigNum === "4") await compSci();
  if (sigNum === "5") await recipe();
  if (sigNum === "6") await skiing();
  if (sigNum === "7") await army3();
  if (sigNum === "8") await slapsgiving();
  if (sigNum === "9") await knitting();
  if (sigNum === "10") await recon();
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
