import React, { Component } from 'react'

export default class GameForm extends Component {
  render() {
    var prefix = this.props.prefix;
    return (
      <div>
          <div className='form-group'>
              <label className='col-sm-12' htmlFor='title'>Команда</label>
              <div className='col-sm-12'>
                  <select
                    name={`data[${prefix}_id]`}
                    className='form-control'
                    defaultValue=''required>
                      <option value='' disabled>Команда</option>
                        {this.props.teams.map(function(team) {
                            return <option key={team.id}
                            value={team.id}>{team.title}</option>;
                          })
                         }
              </select>
          </div>
        </div>
        <div className='form-group'>
            <label className='col-sm-12' htmlFor='goals'>Голы по периодам</label>
            <div className='col-sm-12'>
            <input
            name={`data[${prefix}_score_1]`}
            type='text'
            className='form-control'
            placeholder='1-й'
            />
            </div>
            <div className='col-sm-12'>
                <input
                name={`data[${prefix}_score_2]`}
                type='text'
                className='form-control'
                placeholder='2-й'
                />
            </div>
        <div className='col-sm-12'>
            <input
            name={`data[${prefix}_score_3]`}
            type='text'
            className='form-control'
            placeholder='3-й'
            />
            </div>
            <div className='col-sm-12'>
                <input
                name={`data[${prefix}_score_ot]`}
                type='text'
                className='form-control'
                placeholder='ОТ'
                />
            </div>
        <div className='col-sm-12'>
            <input
            name={`data[${prefix}_score_b]`}
            type='text'
            className='form-control'
            placeholder='Б'
            />
            </div>
        </div>

            <div className='form-group'>
                <label className='col-sm-12' htmlFor='goals'>Штрафы по периодам</label>
                <div className='col-sm-12'>
                    <input
                    name={`data[${prefix}_penalty_1]`}
                    type='text'
                    className='form-control'
                    placeholder='1-й'
                    />
                </div>
                <div className='col-sm-12'>
                    <input
                    name={`data[${prefix}_penalty_2]`}
                    type='text'
                    className='form-control'
                    placeholder='2-й'
                    />
                </div>
                <div className='col-sm-12'>
                    <input
                    name={`data[${prefix}_penalty_3]`}
                    type='text'
                    className='form-control'
                    placeholder='3-й'
                    />
                </div>
                <div className='col-sm-12'>
                    <input
                    name={`data[${prefix}_penalty_ot]`}
                    type='text'
                    className='form-control'
                    placeholder='ОТ'
                    />
                </div>
            </div>

            <div className='form-group'>
                <label className='col-sm-12' htmlFor='goals'>Удары по периодам</label>
                <div className='col-sm-12'>
                    <input
                    name={`data[${prefix}_shots_1]`}
                    type='text'
                    className='form-control'
                    placeholder='1-й'
                    />
                </div>
                <div className='col-sm-12'>
                    <input
                    name={`data[${prefix}_shots_2]`}
                    type='text'
                    className='form-control'
                    placeholder='2-й'
                    />
                </div>
                <div className='col-sm-12'>
                    <input
                    name={`data[${prefix}_shots_3]`}
                    type='text'
                    className='form-control'
                    placeholder='3-й'
                    />
                </div>
                <div className='col-sm-12'>
                    <input
                    name={`data[${prefix}_shots_ot]`}
                    type='text'
                    className='form-control'
                    placeholder='ОТ'
                    />
                </div>
            </div>

            <div className='form-group'>
                <label className='col-sm-12' htmlFor='title'>Голы в большинстве</label>
                <div className='col-sm-12'>
                    <input
                        name={`data[${prefix}_pp_goals]`}
                        type='text'
                        className='form-control'
                        placeholder=''
                     />
                </div>
            </div>

            <div className='form-group'>
                <div className='col-sm-12'>
                    <div className='checkbox'>
                        <label>
                            <input name={`data[${prefix}_fast]`} type='checkbox' value = '1'/> Быстрый гол
                        </label>
                    </div>
                </div>
                <div className='col-sm-12'>
                    <div className='checkbox'>
                        <label>
                            <input name={`data[${prefix}_first]`} type='checkbox' value = '1'/> Первый гол
                        </label>
                    </div>
                </div>
                <div className='col-sm-12'>
                    <div className='checkbox'>
                        <label>
                            <input name={`data[${prefix}_disq]`} type='checkbox' value = '1'/> Дисквалификация
                        </label>
                    </div>
                </div>
            </div>
          </div>

    )
  }
}
