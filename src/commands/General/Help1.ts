/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "help1",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}zerotwo`,
		        dm: true,
                        aliases: ['h1','?1','well1','menu1']
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const zerotwo = 
			"https://c.tenor.com/7ZzPY3wgX_4AAAPo/zero-two-002.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: zerotwo },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `âââ°â¢ððððâ¢â±ââ
â ${this.client.config.prefix}á´É´Éªá´á´ 
â ${this.client.config.prefix}á´É´Éªá´á´á´á´á´á´Ê 
â ${this.client.config.prefix}á´É´Éªá´á´Qá´á´á´á´ 
â ${this.client.config.prefix}á´á´á´á´á´ 
â ${this.client.config.prefix}á´Êá´Êá´á´á´á´Ê 
â ${this.client.config.prefix}á´á´sá´Êá´Ê 
â ${this.client.config.prefix}É¢á´É´ê±ÊÉªÉ´á´Êá´Êá´á´á´á´Ê 
â ${this.client.config.prefix}Êá´ÉªÉ¢á´ê±Êá´ 
â ${this.client.config.prefix}á´Éªá´ê±á´É´á´ 
â ${this.client.config.prefix}Êá´ÊÉª 
â ${this.client.config.prefix}á´á´É´É¢á´ 
â ${this.client.config.prefix}É´á´á´á´ 
â ${this.client.config.prefix}á´á´á´á´á´á´É´ 
â ${this.client.config.prefix}Êá´á´á´á´á´á´É´á´ 
â ${this.client.config.prefix}Êá´á´á´á´Ê 
â ${this.client.config.prefix}á´¡á´Éªê°á´ 
â ${this.client.config.prefix}ÉªÉ´ê°á´á´¡á´Éªê°á´ 
â ${this.client.config.prefix}á´¡á´ÊÊá´á´á´á´Ê
âââââââââââ
ð É´á´á´á´: á´ê±á´ ${this.client.config.prefix}Êá´Êá´ <á´á´á´á´á´É´á´_É´á´á´á´> á´á´ á´ Éªá´á´¡ á´Êá´ á´á´á´á´á´É´á´ ÉªÉ´ê°á´.
âââââââââââ    
    `,
			}
		);
	};
}
