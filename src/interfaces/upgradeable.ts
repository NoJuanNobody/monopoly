
export default interface Upgradeable<T>{
    upgradeWith(modifier: T): boolean
}