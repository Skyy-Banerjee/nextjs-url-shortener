import Url, { IUrl } from "@/models/Url";
import connectDb from "@/config/db";

export default class UrlRepository {
  private urlModel;
  constructor() {
    connectDb();
    this.urlModel = Url;
  }
  async getUrlById(id: string): Promise<IUrl | null> {
    return await this.urlModel.findById(id).lean<IUrl>();
  }

  async getUrlByShortUrl(shortUrl: string): Promise<IUrl | null> {
    //return await this.urlModel.findOne({ shortUrl }).lean();
    return await this.urlModel.findOne({ shortUrl }).lean<IUrl>();
  }

  async getUrlByOriginalUrl(originalUrl: string): Promise<IUrl | null> {
    return await this.urlModel.findOne({ originalUrl }).lean<IUrl>();
  }

  async getAllUrls(): Promise<IUrl | null> {
    return this.urlModel.find().lean<IUrl>();
  }

  async deleteUrl(id: string): Promise<IUrl | null> {
    return await this.urlModel.findByIdAndDelete(id).lean<IUrl>();
  }

  async createUrl(originalUrl: string, shortUrl: string): Promise<IUrl> {
    return await this.urlModel.create({ shortUrl, originalUrl });
  }
}
