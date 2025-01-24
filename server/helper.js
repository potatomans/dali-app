/*
* File defines helper functions interacting with external API
*/

import * as cheerio from 'cheerio';

// const cheerio = require('cheerio'); // to parse html file

/*
* Get meme names from apimeme.com
* Returns a list of all possible meme names
*/
export const getMemes = async () => {
    const url = "https://apimeme.com/";
    
    try {
        const res = await fetch(url); // handle possible errors. try catch
        const html = await res.text();
        const $ = cheerio.load(html);

        let options = [];
        $('option').each((_, element) => {
            options.push($(element).attr('value'));
        })
        console.log("options", options);
        return options;        
    } catch {
        throw new Error("error getting meme names");
    }
}

/*
* Gets a joke from v2.jokeapi.dev API
* Returns a list of 2 items: setup and delivery
*/
export const getJoke = async () => {
    const url = "https://v2.jokeapi.dev/joke"
    const blacklist = ["nsfw", "religious", "political", "racist", "sexist", "explicit"]; // flags to blacklist when calling API
    const category = "Any";
    const type = "twopart";

    try {
        const res = await fetch(`${url}/${category}?blacklistFlags=${blacklist.join(',')}&type=${type}`);
        const data = await res.json();
        console.log("joke json", data);
        const jokePieces = [data.setup, data.delivery];
        console.log("jokePieces", jokePieces);
        return jokePieces;
    } catch {
        throw new Error("unable to get joke");
    }
}

// TODO: remove after testing
getMemes();
getJoke();