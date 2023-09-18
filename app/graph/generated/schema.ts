// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal,
} from '@graphprotocol/graph-ts';

export class Contract extends Entity {
  constructor(id: string) {
    super();
    this.set('id', Value.fromString(id));
  }

  save(): void {
    let id = this.get('id');
    assert(id != null, 'Cannot save Contract entity without an ID');
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Contract must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set('Contract', id.toString(), this);
    }
  }

  static load(id: string): Contract | null {
    return changetype<Contract | null>(store.get('Contract', id));
  }

  get id(): string {
    let value = this.get('id');
    return value!.toString();
  }

  set id(value: string) {
    this.set('id', Value.fromString(value));
  }

  get smartReaderContract(): Bytes {
    let value = this.get('smartReaderContract');
    return value!.toBytes();
  }

  set smartReaderContract(value: Bytes) {
    this.set('smartReaderContract', Value.fromBytes(value));
  }

  get mainContractAddress(): Bytes {
    let value = this.get('mainContractAddress');
    return value!.toBytes();
  }

  set mainContractAddress(value: Bytes) {
    this.set('mainContractAddress', Value.fromBytes(value));
  }

  get network(): string {
    let value = this.get('network');
    return value!.toString();
  }

  set network(value: string) {
    this.set('network', Value.fromString(value));
  }

  get createdAt(): BigInt {
    let value = this.get('createdAt');
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set('createdAt', Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get('blockNumber');
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set('blockNumber', Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get('transactionHash');
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set('transactionHash', Value.fromBytes(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get('blockTimestamp');
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set('blockTimestamp', Value.fromBigInt(value));
  }

  get subContracts(): Array<string> {
    let value = this.get('subContracts');
    return value!.toStringArray();
  }

  set subContracts(value: Array<string>) {
    this.set('subContracts', Value.fromStringArray(value));
  }

  get Annotations(): Array<string> {
    let value = this.get('Annotations');
    return value!.toStringArray();
  }

  set Annotations(value: Array<string>) {
    this.set('Annotations', Value.fromStringArray(value));
  }
}

export class subContract extends Entity {
  constructor(id: string) {
    super();
    this.set('id', Value.fromString(id));
  }

  save(): void {
    let id = this.get('id');
    assert(id != null, 'Cannot save subContract entity without an ID');
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type subContract must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set('subContract', id.toString(), this);
    }
  }

  static load(id: string): subContract | null {
    return changetype<subContract | null>(store.get('subContract', id));
  }

  get id(): string {
    let value = this.get('id');
    return value!.toString();
  }

  set id(value: string) {
    this.set('id', Value.fromString(value));
  }

  get smartReaderContract(): Bytes {
    let value = this.get('smartReaderContract');
    return value!.toBytes();
  }

  set smartReaderContract(value: Bytes) {
    this.set('smartReaderContract', Value.fromBytes(value));
  }

  get mainContract(): Bytes {
    let value = this.get('mainContract');
    return value!.toBytes();
  }

  set mainContract(value: Bytes) {
    this.set('mainContract', Value.fromBytes(value));
  }

  get subContractName(): string {
    let value = this.get('subContractName');
    return value!.toString();
  }

  set subContractName(value: string) {
    this.set('subContractName', Value.fromString(value));
  }

  get network(): string {
    let value = this.get('network');
    return value!.toString();
  }

  set network(value: string) {
    this.set('network', Value.fromString(value));
  }

  get createdAt(): BigInt {
    let value = this.get('createdAt');
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set('createdAt', Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get('blockNumber');
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set('blockNumber', Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get('transactionHash');
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set('transactionHash', Value.fromBytes(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get('blockTimestamp');
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set('blockTimestamp', Value.fromBigInt(value));
  }

  get ipfsSchema(): string {
    let value = this.get('ipfsSchema');
    return value!.toString();
  }

  set ipfsSchema(value: string) {
    this.set('ipfsSchema', Value.fromString(value));
  }
}

export class Annotation extends Entity {
  constructor(id: string) {
    super();
    this.set('id', Value.fromString(id));
  }

  save(): void {
    let id = this.get('id');
    assert(id != null, 'Cannot save Annotation entity without an ID');
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Annotation must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set('Annotation', id.toString(), this);
    }
  }

  static load(id: string): Annotation | null {
    return changetype<Annotation | null>(store.get('Annotation', id));
  }

  get id(): string {
    let value = this.get('id');
    return value!.toString();
  }

  set id(value: string) {
    this.set('id', Value.fromString(value));
  }

  get mainContract(): Bytes {
    let value = this.get('mainContract');
    return value!.toBytes();
  }

  set mainContract(value: Bytes) {
    this.set('mainContract', Value.fromBytes(value));
  }

  get blockNumber(): BigInt {
    let value = this.get('blockNumber');
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set('blockNumber', Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get('blockTimestamp');
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set('blockTimestamp', Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get('transactionHash');
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set('transactionHash', Value.fromBytes(value));
  }

  get subContractName(): string {
    let value = this.get('subContractName');
    return value!.toString();
  }

  set subContractName(value: string) {
    this.set('subContractName', Value.fromString(value));
  }

  get annotation(): string {
    let value = this.get('annotation');
    return value!.toString();
  }

  set annotation(value: string) {
    this.set('annotation', Value.fromString(value));
  }

  get createdAt(): BigInt {
    let value = this.get('createdAt');
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set('createdAt', Value.fromBigInt(value));
  }
}