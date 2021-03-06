/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "help9",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}help9`,
		        dm: true,
                        aliases: ['h9','?9','well9','menu9']
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const zerotwo = 
			"https://c.tenor.com/S4na5ZkZnVQAAAAC/zerotwo-002.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: zerotwo },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `âââ°â¢ðð¤ðð¤â¢â±ââ
ð«ï¸ ${this.client.config.prefix}ÊÊá´á´á´á´ÉªÉ´á´
ð«ï¸ ${this.client.config.prefix}á´ÊÊÉªsá´á´á´s
ð«ï¸ ${this.client.config.prefix}É¢ÊÉªá´á´Ê
ð«ï¸ ${this.client.config.prefix}á´á´á´ ÉªÊ
ð«ï¸ ${this.client.config.prefix}Êá´ÊÊá´Ê
ð«ï¸ ${this.client.config.prefix}Êá´ÊÊÊá´á´á´á´á´Ê
ð«ï¸ ${this.client.config.prefix}Êá´x
ð«ï¸ ${this.client.config.prefix}á´á´É´á´Ê
ð«ï¸ ${this.client.config.prefix}á´Êá´á´á´
ð«ï¸ ${this.client.config.prefix}á´á´á´á´ê±á´á´
ð«ï¸ ${this.client.config.prefix}ê°Éªá´á´Éªá´É´
ð«ï¸ ${this.client.config.prefix}ê°á´É¢É¢Êá´¡ÉªÉ´á´á´á´¡
ð«ï¸ ${this.client.config.prefix}á´á´á´á´Êá´á´Êá´
ð«ï¸ ${this.client.config.prefix}á´Êá´É´á´á´Ê
ð«ï¸ ${this.client.config.prefix}á´Êá´É´ê±ê°á´Êá´á´Ê
ð«ï¸ ${this.client.config.prefix}É¢Êá´ê°ê°Éªá´Éªá´Êá´
âââââââââââ
ð É´á´á´á´: á´ê±á´ ${this.client.config.prefix}Êá´Êá´ <á´á´á´á´á´É´á´_É´á´á´á´> á´á´ á´ Éªá´á´¡ á´Êá´ á´á´á´á´á´É´á´ ÉªÉ´ê°á´.
âââââââââââ    
    `,
			}
		);
	};
}
