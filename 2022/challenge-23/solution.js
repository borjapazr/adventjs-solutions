const executeCommands = commands => {
  const CPU_MAX_VALUE = 256;

  const CPU_REGISTRIES = {
    V00: 0,
    V01: 0,
    V02: 0,
    V03: 0,
    V04: 0,
    V05: 0,
    V06: 0,
    V07: 0
  };

  const ACTIONS = {
    MOV: (value, registry) => {
      if (value.startsWith('V')) {
        CPU_REGISTRIES[registry] = CPU_REGISTRIES[value];
      } else {
        CPU_REGISTRIES[registry] = +value;
      }
    },
    ADD: (registry1, registry2) => {
      CPU_REGISTRIES[registry1] = (CPU_REGISTRIES[registry1] + CPU_REGISTRIES[registry2]) % CPU_MAX_VALUE;
    },
    DEC: registry => {
      CPU_REGISTRIES[registry] = (CPU_REGISTRIES[registry] - 1 + CPU_MAX_VALUE) % CPU_MAX_VALUE;
    },
    INC: registry => {
      CPU_REGISTRIES[registry] = (CPU_REGISTRIES[registry] + 1) % CPU_MAX_VALUE;
    },
    JMP: (instructionPosition, index) => {
      if (CPU_REGISTRIES.V00 > 0) {
        commands.slice(instructionPosition, index + 1).forEach(command => executeAction(command, index));
      }
    }
  };

  const executeAction = (action, index) => {
    const [command, args] = action.split(' ');
    const argsList = args.split(',').map(argument => argument.replace(/V(\d+)/, (_, p1) => `V0${p1 % 8}`));
    ACTIONS[command](...argsList, index);
  };

  commands.forEach(executeAction);

  return Object.values(CPU_REGISTRIES);
};

const executeCommandsAlt = commands => {
  let commandsToExecute = [...commands];

  const CPU_MAX_VALUE = 256;

  const CPU_REGISTRIES = [0, 0, 0, 0, 0, 0, 0, 0];

  const ACTIONS = {
    MOV: args => {
      const [valueOrRegistry1, registry2] = args;
      CPU_REGISTRIES[+registry2.at(-1)] =
        CPU_REGISTRIES[+valueOrRegistry1.at(-1)] * +valueOrRegistry1.startsWith('V') + ~~valueOrRegistry1;
    },
    ADD: args => {
      const [registry1, registry2] = args.map(registryPosition => +registryPosition.at(-1));
      CPU_REGISTRIES[registry1] = (CPU_REGISTRIES[registry1] + CPU_REGISTRIES[registry2]) % CPU_MAX_VALUE;
    },
    DEC: args => {
      const registry = args.map(registryPosition => +registryPosition.at(-1));
      CPU_REGISTRIES[registry] = (CPU_REGISTRIES[registry] - 1 + CPU_MAX_VALUE) % CPU_MAX_VALUE;
    },
    INC: args => {
      const registry = args.map(registryPosition => +registryPosition.at(-1));
      CPU_REGISTRIES[registry] = (CPU_REGISTRIES[registry] + 1) % CPU_MAX_VALUE;
    },
    JMP: args => {
      const instructionPosition = args.map(registryPosition => +registryPosition.at(-1));
      commandsToExecute = commandsToExecute.concat(
        commandsToExecute.slice(
          instructionPosition,
          (commandsToExecute.indexOf(`JMP ${instructionPosition}`) + 1) * !!CPU_REGISTRIES[0]
        )
      );
    }
  };

  for (let i = 0; i < commandsToExecute.length; i++) {
    const [command, args] = commandsToExecute[i].split(' ');
    const argsList = args.split(',');
    ACTIONS[command](argsList);
  }

  return CPU_REGISTRIES;
};

export { executeCommands, executeCommandsAlt };
