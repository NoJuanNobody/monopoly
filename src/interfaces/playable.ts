export default interface playable<T>{
    next: T
    main(): T //run game scripts within player turns
    exit(): void;
}

