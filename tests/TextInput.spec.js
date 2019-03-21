import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import CrhInput from '../src/CrhInput';
import TextInput from '../src/components/TextInput';
import SelectInput from '../src/components/SelectInput';
import CheckboxInput from '../src/components/CheckboxInput';

describe('Using Text Input', () => {
  it('is loading the text component', () => {
    const wrapper = shallowMount(CrhInput, {
      propsData: {
        type: 'text',
        id: 'teste',
      },
    });
    expect(wrapper.contains(TextInput)).equals(true);
  });
});
describe('Using Select Input', () => {
  it('is loading the select component', () => {
    const wrapper = shallowMount(CrhInput, {
      propsData: {
        type: 'select',
        id: 'teste',
      },
    });
    expect(wrapper.contains(SelectInput)).equals(true);
  });
});
describe('Using Checkbox Input', () => {
  it('is loading the checkbox component', () => {
    const wrapper = shallowMount(CrhInput, {
      propsData: {
        type: 'checkbox',
        id: 'teste',
      },
    });
    expect(wrapper.contains(CheckboxInput)).equals(true);
  });
});
