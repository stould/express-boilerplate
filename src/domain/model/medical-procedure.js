// @flow

class MedicalProcedure {

  code: number;
  name: string;

  constructor(code: number, name: string) {
    this.code = code;
    this.name = name;
  }

}

module.exports = {
  MedicalProcedure: MedicalProcedure,
};