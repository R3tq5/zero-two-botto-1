/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "help2",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}zerotwo`,
		        dm: true,
                        aliases: ['h2','?2','well2','menu2']
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const zerotwo = 
			"https://c.tenor.com/hRnnpZ8eqykAAAPo/zero-two-gif.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: zerotwo },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `âââ°â¢ððªð£â¢â±ââ
				
â ${this.client.config.prefix}á´á´á´ Éªá´á´ 
â ${this.client.config.prefix}ê°á´á´á´ 
â ${this.client.config.prefix}á´á´ÉªÊ 
â ${this.client.config.prefix}á´á´á´á´ 
â ${this.client.config.prefix}Qá´á´á´á´ 
â ${this.client.config.prefix}Êá´á´á´á´ 
â ${this.client.config.prefix}ÊÉªá´ 
â ${this.client.config.prefix}ê±ÊÉªá´
â ${this.client.config.prefix}á´á´á´á´ 
â ${this.client.config.prefix}á´ÊÉªÉ¢É¢á´Ê 
â ${this.client.config.prefix}á´¡á´É´á´á´á´
â ${this.client.config.prefix}á´Êá´sÊ 
â ${this.client.config.prefix}Ç«á´á´sá´Éªá´É´ 
â ${this.client.config.prefix}á´á´Êá´ 
â ${this.client.config.prefix}á´Êá´á´Ê 
â ${this.client.config.prefix}á´Êá´á´
â ${this.client.config.prefix}á´Êá´ê±ê±
âââââââââââ
ð É´á´á´á´: á´ê±á´ ${this.client.config.prefix}Êá´Êá´ <á´á´á´á´á´É´á´_É´á´á´á´> á´á´ á´ Éªá´á´¡ á´Êá´ á´á´á´á´á´É´á´ ÉªÉ´ê°á´.
âââââââââââ    
    `,
			}
		);
	};
}
