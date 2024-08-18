import { makeAutoObservable } from "mobx";
import BoredApi from "@/services/BoredService";
import { ITask } from "@/models/Task";

export default class Store {
    public userId: number | null = null;
    public loading: boolean = false;
    public currentTasks: ITask[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    public getTasks = async (): Promise<void> => {
        this.loading = true;
        try {
            var tasks = [];
            tasks.push(await BoredApi.getRandomActivity());
            tasks.push(await BoredApi.getRandomActivity());
            this.currentTasks = tasks;
            console.log(tasks)
        } catch (e) {
        } finally {
            this.loading = false;
        }
    }

    public fetch = async () => {
        await this.getTasks();
    }
}