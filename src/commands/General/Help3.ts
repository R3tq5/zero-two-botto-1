/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "help3",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}zerotwo`,
		        dm: true,
                        aliases: ['h3','?3','well3','menu3']
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const zerotwo = 
			"https://c.tenor.com/yvGNPPoeZckAAAPo/darling-in.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: zerotwo },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `âââ°â¢ððð£ðð§ðð¡â¢â±ââ
â ${this.client.config.prefix}á´á´á´ÉªÉ´s 
â ${this.client.config.prefix}á´xá´ 
â ${this.client.config.prefix}ÊÉª
â ${this.client.config.prefix}É¢Êá´á´á´ÊÉªÉ´á´
â ${this.client.config.prefix}á´á´á´s 
â ${this.client.config.prefix}á´Êá´ÒÉªÊá´ 
â ${this.client.config.prefix}á´¢á´Êá´á´á´¡á´
â ${this.client.config.prefix}sá´á´á´á´Êá´
â ${this.client.config.prefix}Êá´Êá´s
â ${this.client.config.prefix}ÉªÉ´Òá´
â ${this.client.config.prefix}Êá´É´á´
âââââââââââ
ð É´á´á´á´: á´ê±á´ ${this.client.config.prefix}Êá´Êá´ <á´á´á´á´á´É´á´_É´á´á´á´> á´á´ á´ Éªá´á´¡ á´Êá´ á´á´á´á´á´É´á´ ÉªÉ´ê°á´.
âââââââââââ    
    `,
			}
		);
	};
}
