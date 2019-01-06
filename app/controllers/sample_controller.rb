class SampleController < ApplicationController
  def index
    @sample_data = { name: 'Sample', value: 'Value' }
  end
end