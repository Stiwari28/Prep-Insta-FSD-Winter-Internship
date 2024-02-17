const quotes=[
        {
            "text": "The only way to do great work is to love what you do.",
            "author": "Steve Jobs"
        },
        {
            "text": "In the end, it's not the years in your life that count. It's the life in your years.",
            "author": "Abraham Lincoln"
        },
        {
            "text": "Life is what happens when you're busy making other plans.",
            "author": "John Lennon"
        },
        {
            "text": "You miss 100% of the shots you don't take.",
            "author": "Wayne Gretzky"
        },
        {
            "text": "The only thing necessary for the triumph of evil is for good men to do nothing.",
            "author": "Edmund Burke"
        },
        {
            "text": "It does not matter how slowly you go as long as you do not stop.",
            "author": "Confucius"
        },
        {
            "text": "Life is 10% what happens to us and 90% how we react to it.",
            "author": "Charles R. Swindoll"
        },
        {
            "text": "The only true wisdom is in knowing you know nothing.",
            "author": "Socrates"
        },
        {
            "text": "Believe you can and you're halfway there.",
            "author": "Theodore Roosevelt"
        },
        {
            "text": "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
            "author": "Mother Teresa"
        },
        {
            "text": "The best time to plant a tree was 20 years ago. The second best time is now.",
            "author": "Chinese Proverb"
        },
        {
            "text": "Stay hungry, stay foolish.",
            "author": "Steve Jobs"
        },
        {
            "text": "Don't cry because it's over, smile because it happened.",
            "author": "Dr. Seuss"
        },
        {
            "text": "Strive not to be a success, but rather to be of value.",
            "author": "Albert Einstein"
        },
        {
            "text": "In three words I can sum up everything I've learned about life: it goes on.",
            "author": "Robert Frost"
        },
        {
            "text": "Life isn't about finding yourself. Life is about creating yourself.",
            "author": "George Bernard Shaw"
        },
        {
            "text": "The journey of a thousand miles begins with one step.",
            "author": "Lao Tzu"
        },
        {
            "text": "What you get by achieving your goals is not as important as what you become by achieving your goals.",
            "author": "Zig Ziglar"
        },
        {
            "text": "You can't use up creativity. The more you use, the more you have.",
            "author": "Maya Angelou"
        },
        {
            "text": "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
            "author": "Bil Keane"
        },
        {
            "text": "The only limit to our realization of tomorrow will be our doubts of today.",
            "author": "Franklin D. Roosevelt"
        },
        {
            "text": "I have not failed. I've just found 10,000 ways that won't work.",
            "author": "Thomas A. Edison"
        },
        {
            "text": "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
            "author": "Mark Twain"
        },
        {
            "text": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            "author": "Winston Churchill"
        },
        {
            "text": "The only way to do great work is to love what you do.",
            "author": "Steve Jobs"
        },
        {
            "text": "We know what we are, but know not what we may be.",
            "author": "William Shakespeare"
        },
        {
            "text": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
            "author": "Ralph Waldo Emerson"
        },
        {
            "text": "The future belongs to those who believe in the beauty of their dreams.",
            "author": "Eleanor Roosevelt"
        },
        {
            "text": "The only limit to our realization of tomorrow will be our doubts of today.",
            "author": "Franklin D. Roosevelt"
        },
        {
            "text": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            "author": "Winston Churchill"
        }
];
function generateRandomQuotes(){
    const randomIndex=Math.floor(Math.random()*quotes.length);
    randomQuote=quotes[randomIndex];
    document.getElementById('quote_text').innerHTML=randomQuote.text;
    document.getElementById('author_text').innerHTML=randomQuote.author;
}
const quotebtn=document.getElementById('quotebtn');
quotebtn.addEventListener('click', generateRandomQuotes);